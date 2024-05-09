import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  getPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      console.log('Retrieved Posts:', this.posts);
    });
  }

  tags: string[] = [];
  selectedTag!: string;
  filteredPosts: Post[] = [];

  ngOnInit(): void {
    this.getPosts();
    this.tags = ['All'];
    this.posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag);
        }
      });
    });
    this.selectedTag = 'All';
    this.filteredPosts = this.posts;
  }

  onTagChange(tag: string): void {
    if (tag === 'All') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter((post) =>
        post.tags?.includes(tag)
      );
    }
  }
}
