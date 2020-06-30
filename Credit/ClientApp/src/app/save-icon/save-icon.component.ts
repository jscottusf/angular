import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { BookService, BookDataModel } from "../../Services/books.service";

@Component({
  selector: "save-icon",
  templateUrl: "./save-icon.component.html",
  styleUrls: ["./save-icon.component.css"],
})
export class SaveIconComponent implements OnInit {
  @Input() book = {};
  bookInfo: any = {};
  public bookModel: BookDataModel;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  saveBook(book) {
    console.log(book);
    this.bookInfo = {
      title: book.volumeInfo.title
        ? book.volumeInfo.title
        : "No Title...Why did you save this?",
      author: book.volumeInfo.authors
        ? book.volumeInfo.authors[0]
        : "No author listed",
      description: book.searchInfo
        ? book.searchInfo.textSnippet
        : "no description available",
      imageUrl: book.volumeInfo.imageLinks
        ? book.volumeInfo.imageLinks.thumbnail
        : "../../assets/images/book-generic.jpg",
      info: book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "",
      preview: book.volumeInfo.previewLink ? book.volumeInfo.previewLink : "",
      rating: 0,
    };
    this.bookService.postNewBook(this.bookInfo).subscribe(
      (res) => this.router.navigate(["/favoritebooks"]),
      (err) => console.log(err)
    );
  }
}
