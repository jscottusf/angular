import { Component, OnInit } from "@angular/core";
import { GoogleBookService } from "../../Services/googlebooks.service";
import { BookService, BookDataModel } from "../../Services/books.service";

@Component({
  selector: "app-book-search",
  templateUrl: "./book-search.component.html",
  styleUrls: ["./book-search.component.css"],
})
export class BookSearchComponent implements OnInit {
  query: string = "";
  bookData: any = {};
  bookList = [];
  public bookModel: BookDataModel;

  constructor(
    private bookService: GoogleBookService,
    private savedService: BookService
  ) {}

  ngOnInit() {
    this.query = "Jurrasic Park";
    this.searchGoogleBooks(this.query);
    this.getAllSavedBooks();
  }

  searchGoogleBooks(query) {
    this.bookService.searchBooks(query).subscribe(
      (data) => {
        this.bookData = data;
        this.bookList = this.bookData.items;
        console.log(this.bookList);
      },
      (err) => console.log(err)
    );
  }
  getAllSavedBooks() {
    this.savedService.getallBooks().subscribe(
      (data) => {
        this.bookModel = data;
        console.log(this.bookModel);
      },
      (err) => console.log(err)
    );
  }
}
