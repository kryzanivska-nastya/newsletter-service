from fastapi import FastAPI
from fastapi import HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)
class Post(BaseModel):
    id: str
    title: str
    summary: str
    tags: List[str]
    content: str

posts = [
    Post(id="1", title="Post 1", summary="Summary of Post 1", tags=["tag1"], content="Content of Post 1"),
    Post(id="2", title="Post 2", summary="Summary of Post 2", tags=["tag2"], content="Content of Post 2"),
    Post(id="3", title="Post 3", summary="Summary of Post 3", tags=["tag3"], content="Content of Post 3")
]

@app.get("/posts", response_model=List[Post])
async def get_posts():
    return posts

@app.get("/posts/{post_id}", response_model=Post)
async def get_post(post_id: str):
    for post in posts:
        if post.id == post_id:
            return post
    raise HTTPException(status_code=404, detail="Post not found")

@app.get("/tags", response_model=List[str])
async def get_tags():
    all_tags = []
    for post in posts:
        all_tags.extend(post.tags)
    unique_tags = list(set(all_tags))
    return unique_tags

@app.get("/posts/filter")
async def filter_posts(tag: str):
    filtered_posts = [post for post in posts if tag in post.tags]
    return filtered_posts
