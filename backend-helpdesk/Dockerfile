FROM python:3-alpine
WORKDIR /usr/src/app
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt &&\
    pip install pipenv &&\
    pipenv install -r requirements.txt &&\
    pip install uvicorn  &&\
    pip install pydantic &&\
    pip install fastapi &&\
    pip install motor
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]