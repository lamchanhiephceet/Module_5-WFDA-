import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowBookComponent} from './components/show-book/show-book.component';
import {CreateBookComponent} from './components/create-book/create-book.component';
import {EditBookComponent} from './components/edit-book/edit-book.component';
import {DeleteBookComponent} from './components/delete-book/delete-book.component';
import {BookListComponent} from './components/book-list/book-list.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'show/:id',
    component: ShowBookComponent
  },
  {
    path: 'create',
    component: CreateBookComponent
  },
  {
    path: 'edit/:id',
    component: EditBookComponent
  },
  {
    path: 'delete/:id',
    component: DeleteBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
