import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  post!: Post;

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
      },
      (error) => {
        console.error('Error:', error.message);
      }
    );
  }
}
