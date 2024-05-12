import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = '/api/posts';

  constructor(private http: HttpClient) {}

  renderMarkdown(content: string): Observable<any> {
    const url = `${this.apiUrl}/renderMarkdown`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(url, { content }, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error rendering Markdown:', error);
        return throwError('Something went wrong; please try again later.');
      })
    );
  }

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  renderPost(id: string): Observable<any> {
    const url = `${this.apiUrl}/render/${id}`;
    return this.http.get<any>(url);
  }

  getPostById(id: string): Observable<Post> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Post>(url).pipe(catchError(this.handleError));
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>('/api/tags');
  }

  filterPosts(tag: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/filter?tag=${tag}`);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
