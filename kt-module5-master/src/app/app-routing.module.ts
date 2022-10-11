import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';

const routes: Routes = [ 
  { path: 'books', component: BookListComponent },
  { path: 'add-book', component: AddBookComponent},
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'edit-book/:id', component: UpdateBookComponent },
  { path: 'detail-book/:id', component: BookDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
