import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseURL = "http://localhost:3000/books"
  constructor(private httpClient: HttpClient) { }
  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}`);
  }
  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.baseURL}`, book);
  }
  updateBook(id: number, book: Book): Observable<Object> {
    return this.httpClient.put<Book>(`${this.baseURL}/${id}`, book);
  }
  deleteBook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${this.baseURL}/${id}`);
  }
  getById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.baseURL}/${id}`);
  }
}
