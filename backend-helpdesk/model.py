from pydantic import BaseModel
from enum import Enum
from datetime import datetime

class Status (str, Enum):
  open = 'open'
  answered = 'answered'
  expired = 'expired'
  closed = 'closed'

class Ticket (BaseModel):
  number: int
  title: str
  date: datetime
  issue: str
  creator: str
  priority: str
  assignedTo: str
  status: Status = Status.open

