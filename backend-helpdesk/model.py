from pydantic import BaseModel

class Ticket (BaseModel):
  number: int
  title: str
  date: int
  description: str
  creator: str
  priority: str
  assignedTo: str
