import {Component, Input, OnInit} from '@angular/core';
import {BooksService} from '../../books.service';
import {Books} from '../../books.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input() bookItem: Books;

  constructor(private bookService: BooksService) { }

  ngOnInit() {
  }

  onBookItemClicked() {
    this.bookService.bookSelected.emit(this.bookItem);  //emits an event with the selected book item
  }

}
