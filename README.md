# Newsletter Service

This project is a newsletter service that displays a list of posts in tile format on the main page, with functionality to navigate to detailed post pages. The service includes filtering capabilities based on post tags. The backend is simulated with dummy data, and the post content is rendered from Markdown text including images.

## Technologies Used

- **Frontend**: Angular, TypeScript, Angular Material
- **Backend**: Python FastAPI, REST WebAPI
- **Deployment**: Docker, Docker Compose
- **Documentation**: Markdown

## Installation and Setup

### Prerequisites

- Docker installed on your machine.

### Clone the Repository

```bash
git clone <repository_url>
cd newsletter-service
```

## Build and Run Docker Containers
```bash
docker-compose up --build
```
This command will build and start the Docker containers for the frontend and backend.

## Accessing the Frontend
Once the containers are up and running, you can access the frontend at http://localhost:4200.

# Interacting with the API
## Get All Posts

```http
GET http://localhost:8000/posts
```
## Get Post by ID

```http
GET http://localhost:8000/posts/{post_id}
```
## Filter Posts by Tag

```http
GET http://localhost:8000/posts/filter?tag={tag}
```

# Other Endpoints

## Render Markdown Content

```http
POST http://localhost:8000/posts/renderMarkdown
```

## Get Tags

```http
GET http://localhost:8000/tags
```
# Usage
## Main Page
The main page displays posts in a tile format with a brief summary.
Each tile is clickable, leading to a detailed view of the post.
You can filter posts by tags using the dropdown menu.
## Detailed Post View
The detailed view of the posts renders Markdown text, including handling of embedded images.
Clicking on the "Back to Posts" button will navigate you back to the main page.
## Additional Notes
Ensure the Docker containers are running to access the application.
You may need to wait a few moments for the containers to start up initially.
## Contributing
If you'd like to contribute to this project, please fork the repository and create a pull request.
