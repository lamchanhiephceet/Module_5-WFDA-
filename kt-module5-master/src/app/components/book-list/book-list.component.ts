import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  quantity: number;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }
  private getBooks() {
    this.bookService.getBookList().subscribe(data => {
      this.books = data
      this.quantity = data.length;
    });
  }
  bookDetails(id: number): void {
    this.router.navigate(['/bookDetails', id]);
  }
  updateBooks(id: number): void {
    this.router.navigate(['/edit-book', id]);
  }
  deleteBook(id: number): void {
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data);
      this.getBooks();
    })
  }
}
