from typing import Collection ###Predicción de estructuras y objetos a la hora de codear (no necesario)
from model import Ticket ###Se importa el modelo "Ticket" para poder utilizarlo y consultarlo en este archivo

#MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017') ###¿Dónde voy a buscar los datos?

database = client.Helpdesk ### Voy a guardar todo en la BD "Helpdesk"

### Creación colecciones dentro de la BD
collection = database.ticket
coll = database.user

### Distintas querys usando MongoDB
async def fetch_one_ticket(title):
  #Encontrar un ticket por titulo /No utilizado/#
  document = collection.find_one({"title":title})
  return document


async def fetch_all_tickets():
  #Traer todos los tickets y devolverlos en un array#
  tickets = []
  cursor = collection.find({})
  async for document in cursor:
    tickets.append(Ticket(**document))
  return tickets

async def create_ticket(ticket):
  #Crear un ticket#
  document = ticket
  result = await collection.insert_one(document)
  return document

async def update_ticket(issue):
  #Actualizar un ticket /No utilizado/
  await collection.update_one({"$set":{"issue":issue}})
  document = await collection.find_one({"title":issue})
  return document
