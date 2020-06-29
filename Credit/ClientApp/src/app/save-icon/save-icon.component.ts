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
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      description: book.searchInfo.textSnippet,
      imageUrl: book.volumeInfo.imageLinks.thumbnail,
      info: book.volumeInfo.infoLink,
      preview: book.volumeInfo.previewLink,
    };
    this.bookService.postNewBook(this.bookInfo).subscribe(
      (res) => this.router.navigate(["/favoritebooks"]),
      (err) => console.log(err)
    );
  }
}
