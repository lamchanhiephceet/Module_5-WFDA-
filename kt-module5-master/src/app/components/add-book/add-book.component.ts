import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book: Book = new Book();
  constructor(private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addBook() {
    this.bookService.createBook(this.book).subscribe(data => {
      console.log(data);
      this.goBookList();
    }),
      error => console.log(error);
  }
  goBookList() {
    this.router.navigate(['books']);
  }
  onSubmit() {
    console.log(this.book);
    this.addBook()
  }
}
