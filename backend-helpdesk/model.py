### En esta sección se establece el modelado de los datos en clases

from pydantic import BaseModel
from enum import Enum
from datetime import datetime

class Status (str, Enum):
  #Enumeración de estado de tickets
  open = 'open'
  answered = 'answered'
  expired = 'expired'
  closed = 'closed'

class Ticket (BaseModel):
  #Modelo de un ticket
  number: int
  title: str
  date: datetime
  issue: str
  creator: str
  priority: str
  assignedTo: str
  status: Status = Status.open

