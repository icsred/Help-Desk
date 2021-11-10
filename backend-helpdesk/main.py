from model import Ticket ### Se importa el modelo "Ticket" para poder utilizarlo y consultarlo en este archivo
from fastapi import FastAPI, HTTPException ### Con esta librería se implementa el backend, su ventaja es que se pueden ejecutar los métodos que uno crea de forma visual

from database import (
  #Importo consultas a la BD#
  fetch_one_ticket,
  fetch_all_tickets,
  create_ticket,
  update_ticket,
  
)

from fastapi.middleware.cors import CORSMiddleware ### Soluciona errores de consulta en dominios externos

#Objeto APP
app = FastAPI()

### Acá se indica que el frontend va a estar en un puerto distinto al backend, CORS permite esto
origins = ['http://localhost:3000']

app.add_middleware(
  ### Permisos de CORS ###
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials = True,
  allow_methods=["*"],
  allow_headers=["*"],
)

###Funcines que son ejecutadas sobre la API, las cuales buscan la info en "database"
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
async def put_ticket(title:str, issue:str):
  response = await update_ticket(title, issue)
  if response:
    return response
  raise HTTPException(400, "No hay un item con este título")

