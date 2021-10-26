from pydantic import BaseModel
from datetime import datetime

class Ticket (BaseModel):
  number: int
  title: str
  date: datetime
  issue: str
  creator: str
  priority: str
  assignedTo: str
