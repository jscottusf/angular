import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BookService } from "src/Services/books.service";

@Component({
  selector: "book-rating",
  templateUrl: "./book-rating.component.html",
  styleUrls: ["./book-rating.component.css"],
})
export class BookRatingComponent implements OnInit {
  @Input() bookId;
  @Input() rating: number;
  @Input() book: any = {};
  @Output() bookRated = new EventEmitter();
  //public bookModel = BookDataModel;
  constructor(private bookService: BookService) {}

  ngOnInit() {}

  rateBook(id, rating) {
    this.book.rating = rating;
    this.bookService.editBook(id, this.book).subscribe(
      (res) => this.bookRated.emit(),
      (err) => console.log(err)
    );
  }
}
