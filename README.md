# Newsletter Service

## Project Overview

The objective of this project is to develop a newsletter service that displays a list of posts in tile format on the main page, with functionality to navigate to detailed post pages. The service includes filtering capabilities based on post tags. The backend is simulated with dummy data, and the post content is rendered from Markdown text including images.

### Technologies Used

- **Frontend:**
  - Angular
  - TypeScript
  - Angular Material

- **Backend:**
  - Python FastAPI
  - REST WebAPI

- **Deployment:**
  - Docker
  - Docker Compose

- **Documentation:**
  - Markdown

## Project Structure

The project structure is as follows:

- **frontend:** Contains the Angular frontend code.
- **backend:** Contains the Python FastAPI backend code.

## Setup

### Frontend

1. Navigate to the `frontend` directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the frontend server.

```bash
cd frontend
npm install
npm start
```

### Backend
1. Navigate to the backend directory.
2. Install Python dependencies using pip install -r requirements.txt.
3. Run the backend server using uvicorn main:app --host 0.0.0.0 --port 8000.

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000
```
### Dockerfiles
### Frontend Dockerfile
```Dockerfile
FROM node:alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
```

### Backend Dockerfile
```Dockerfile
FROM python:3.9-slim AS base

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Docker Compose
docker-compose.yaml
```yaml
version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "8080:80"
    depends_on:
      - backend

  backend:
    build:
      context: ./newsletter-service-backend
      dockerfile: Dockerfile
    ports:
      - "8000:8000"
```

### Deployment
## Docker
Make sure Docker is installed on your machine.
Run docker-compose up in the project root directory to build and start the frontend and backend services.

```bash
docker-compose up
```

## Usage
### Access the frontend application at http://localhost:8080/.
### Access the backend API at http://localhost:8000/.


