import { Component } from '@angular/core';
import { Post } from '../post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent {
  post!: Post;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const postId = params['id'];

      this.post = {
        id: postId,
        title: 'Post Title',
        summary: 'Post Summary',
        content: 'Post Content',
        tags: ['tag1', 'tag2'],
      };
    });
  }
}
