import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookService } from "../../Services/books.service";

@Component({
  selector: 'remove-icon',
  templateUrl: './remove-icon.component.html',
  styleUrls: ['./remove-icon.component.css']
})
export class RemoveIconComponent implements OnInit {
  @Input() bookId;
  @Output() onDeleteBook = new EventEmitter();

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  deleteBook(bookId) {
    console.log(bookId)
    this.bookService.deleteBook(bookId).subscribe(res => this.onDeleteBook.emit(), err => console.log(err));
  }
}
