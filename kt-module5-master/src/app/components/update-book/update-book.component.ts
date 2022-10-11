import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  id: number;
  book: Book;

  constructor(private router: Router, private bookService: BookService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getById(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error))
  }
  onSubmit(): void {
    this.bookService.updateBook(this.id, this.book).subscribe(data => {
      this.goToBookList();
    }, error => console.log(error))
  }
  goToBookList(): void {
    this.router.navigate(['/books'])
  }
}
