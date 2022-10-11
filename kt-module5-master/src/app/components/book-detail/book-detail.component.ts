import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  id: number;
  constructor(private bookService: BookService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookDetails();
  }

  bookDetails(): void {
    this.id = this.router.snapshot.params['id'];
    this.book = new Book();
    this.bookService.getById(this.id).subscribe(data => {
      this.book = data;
    })
  }
}
