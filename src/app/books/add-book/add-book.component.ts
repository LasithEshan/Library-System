import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  isbn: string;
  name: string;
  author: string;
  description: string;
  imagePath: string;
  copiesAvailable: number;
  dateAdded: Date;


  constructor() { }

  ngOnInit() {
  }

}
