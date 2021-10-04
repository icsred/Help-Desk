from model import Ticket
from fastapi import FastAPI, HTTPException

from database import (
  fetch_one_ticket,
  fetch_all_tickets,
  create_ticket,
  update_ticket,
  
)

from fastapi.middleware.cors import CORSMiddleware

#Objeto APP
app = FastAPI()

#Conecto el front con el back
origins = ['http://localhost:3000']

app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials = True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get("/")
def read_root():
  return {"Fernando": "Ale"}

@app.get("/api/tickets")
async def get_ticket():
  response = await fetch_all_tickets()
  return response

@app.get("/api/ticket{title}", response_model = Ticket)
async def get_ticket_by_id(title):
  response = await fetch_one_ticket(title)
  if response:
    return response
  raise HTTPException(404, f"there is no ticket item with this title {title}")

@app.post("/api/ticket", response_model = Ticket)
async def post_ticket(ticket:Ticket):
  response = await create_ticket(ticket.dict())
  if response:
    return response
  raise HTTPException(400, "Bad Request")

@app.put("/api/todo{title}", response_model=Ticket)
async def put_ticket(title:str, description:str):
  response = await update_ticket(title, description)
  if response:
    return response
  raise HTTPException(400, "No hay un item con este título")

