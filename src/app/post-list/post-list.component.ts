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
  tags: string[] = [];
  selectedTag: string = 'All';
  filteredPosts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.extractTags();
      this.filterPosts();
    });
  }

  extractTags(): void {
    this.tags = ['All'];
    this.posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        if (!this.tags.includes(tag)) {
          this.tags.push(tag);
        }
      });
    });
  }

  onTagChange(): void {
    this.filterPosts();
  }

  filterPosts(): void {
    if (this.selectedTag === 'All') {
      this.filteredPosts = this.posts;
    } else {
      this.filteredPosts = this.posts.filter((post) =>
        post.tags?.includes(this.selectedTag)
      );
    }
  }
}
