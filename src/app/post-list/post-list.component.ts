import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts = [
    {
      id: '1',
      title: 'Post 1',
      summary: 'Summary of Post 1',
      content: 'Content of Post 1',
    },
    {
      id: '2',
      title: 'Post 2',
      summary: 'Summary of Post 2',
      content: 'Content of Post 2',
    },
  ];

  constructor() {}
}
