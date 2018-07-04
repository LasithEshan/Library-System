import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CarouselComponent } from './carousel/carousel.component';
import { BooksComponent } from './books/books.component';
import { UserComponent } from './user/user.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksDetailComponent } from './books/books-detail/books-detail.component';
import { BookItemComponent } from './books/books-list/book-item/book-item.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import {BooksService} from './books/books.service';
import { AddBookComponent } from './books/add-book/add-book.component';

const appRoutes: Routes = [
  {path: 'books', component: BooksComponent},
  {path: 'user', component: UserComponent},
  {path: '', component: LoginComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    BooksComponent,
    UserComponent,
    BooksListComponent,
    BooksDetailComponent,
    BookItemComponent,
    LoginComponent,
    AddBookComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
