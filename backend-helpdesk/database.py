from typing import Collection
from model import Ticket

#MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

database = client.Helpdesk

collection = database.ticket
coll = database.user


async def fetch_one_ticket(title):
  document = collection.find_one({"title":title})
  return document


async def fetch_all_tickets():
  tickets = []
  cursor = collection.find({})
  async for document in cursor:
    tickets.append(Ticket(**document))
  return tickets

async def create_ticket(ticket):
  document = ticket
  result = await collection.insert_one(document)
  return document

async def update_ticket(issue):
  await collection.update_one({"$set":{"issue":issue}})
  document = await collection.find_one({"title":issue})
  return document
