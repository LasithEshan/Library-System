import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from '../books.service';
import {Books} from '../books.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit, OnDestroy {

  books: Books[];
  private  bookSubs: Subscription;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
   this.bookService.getBooks();
    this.bookSubs = this.bookService.getBooksUpdated().subscribe(
      (books: Books[]) => {
        this.books = books;

      }
    );
  }

  ngOnDestroy() {

    this.bookSubs.unsubscribe();
  }

}
