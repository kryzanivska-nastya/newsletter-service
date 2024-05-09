import { Component } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts: Post[] = [
    {
      id: '1',
      title: 'Post 1',
      summary: 'Summary of Post 1',
      tags: ['tag1', 'tag2'],
      content: 'Content of Post 1',
    },
    {
      id: '2',
      title: 'Post 2',
      summary: 'Summary of Post 2',
      tags: ['tag2', 'tag3'],
      content: 'Content of Post 2',
    },
  ];

  tags: string[] = [];
  selectedTag!: string;
  filteredPosts: Post[] = [];

  constructor() {}

  ngOnInit(): void {
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
