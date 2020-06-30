import { Component, OnInit } from "@angular/core";
import { BookService, BookDataModel } from "../../Services/books.service";

@Component({
  selector: "app-favorite-books",
  templateUrl: "./favorite-books.component.html",
  styleUrls: ["./favorite-books.component.css"],
})
export class FavoriteBooksComponent implements OnInit {
  public bookModel: BookDataModel;
  constructor(private bookService: BookService) {
    this.getAllSavedBooks();
  }

  ngOnInit() {}

  getAllSavedBooks() {
    this.bookService.getallBooks().subscribe(
      (data) => (this.bookModel = data),
      (err) => console.log(err)
    );
  }

  exexOnDelete($event: any) {
    this.getAllSavedBooks();
  }

  exexOnRate($event: any) {
    this.getAllSavedBooks();
  }
}
