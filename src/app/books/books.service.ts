import {Books} from './books.model';
import {EventEmitter, Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Subject} from 'rxjs';


@Injectable({providedIn: 'root'})
export class BooksService {
  private booksUpdated = new Subject<Books[]>();


  bookSelected = new EventEmitter<Books>();

  private books: Books[] = [
    // new Books(' ', 'Inferno', 'Dan Brown', 'This is a novel',
    //           'http://www.guibingzhuche.com/data/out/323/1909080.png', 5),
    // new Books(' ', 'Inferno2', 'Dan Brown', 'This is a novel',
    //   'http://www.guibingzhuche.com/data/out/323/1909080.png', 5),
    // new Books(' ', 'Inferno3', 'Dan Brown', 'This is a novel',
    //   'http://www.guibingzhuche.com/data/out/323/1909080.png', 5),

  ];
  constructor(private http: HttpClient) {}

  getBooks() {
    this.http.get<{message: string, serverBooks: Books[]}>('http://localhost:3000/api/books').subscribe( (bookData) => {

      this.books = bookData.serverBooks;
      this.booksUpdated.next([...this.books]);
    });

  }

  getBooksUpdated() {
    return this.booksUpdated.asObservable();
  }


}
