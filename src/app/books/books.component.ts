import { Component, OnInit } from '@angular/core';
import {BooksService} from './books.service';
import {Books} from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {

  selectedBook: Books;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.bookSelected.subscribe(
      (book: Books) => {
        this.selectedBook = book;
      }
    );
  }

}
