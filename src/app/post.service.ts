import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:8000/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  getPostById(id: string): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url).pipe(catchError(this.handleError));
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8000/tags');
  }

  filterPosts(tag: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/filter?tag=${tag}`);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
