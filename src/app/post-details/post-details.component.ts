import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  post!: Post;
  renderedContent: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const postId = params['id'];
      if (postId) {
        this.getPost(postId);
      }
    });
  }

  getPost(id: string): void {
    this.postService.getPostById(id).subscribe(
      (post) => {
        this.post = post;
        this.renderMarkdown(post.content);
      },
      (error) => {
        console.error('Error:', error.message);
      }
    );
  }

  renderMarkdown(content: string): void {
    this.postService.renderMarkdown(content).subscribe(
      (response) => {
        console.log('Response from server:', response);
        this.renderedContent = response.contentHtml;
      },
      (error) => {
        console.error('Error rendering Markdown:', error);
      }
    );
  }
}
