export class Books {

  public isbn: string;
  public name: string;
  public author: string;
  public description: string;
  public imagePath: string;
  public copiesAvailable: number;
  public dateAdded: Date;

  constructor(isbn: string, name: string, author: string, description: string, imagePath: string, copiesAvailable: number,
    dateAdded: Date)  {
    this.isbn = isbn;
    this.name = name;
    this.author = author;
    this.description = description;
    this.imagePath = imagePath;
    this.copiesAvailable = copiesAvailable;
    this.dateAdded = dateAdded;
  }
}
