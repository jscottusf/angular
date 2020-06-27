import { Component, OnInit } from "@angular/core";
import { BookService } from "../../Services/googlebooks.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-book-search",
  templateUrl: "./book-search.component.html",
  styleUrls: ["./book-search.component.css"],
})
export class BookSearchComponent implements OnInit {
  query: string = "";
  bookData: any = {};
  bookList = [];
  public bookSearch: string = "";

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.query = "Jurrasic Park";
    this.searchGoogleBooks(this.query);
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.bookSearch = "";
  }

  searchGoogleBooks(query) {
    this.bookService.searchBooks(query).subscribe(
      (data) => {
        this.bookData = data;
        this.bookList = this.bookData.items;
        this.resetForm();
      },
      (err) => console.log(err)
    );
  }
}
