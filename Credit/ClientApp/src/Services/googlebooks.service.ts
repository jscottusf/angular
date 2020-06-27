import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BookService implements OnInit {
  query: string = "";
  private apiUrl = "";
  list = [];

  constructor(private http: HttpClient) {
    this.apiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
  }

  ngOnInit() {}

  searchBooks(query: string) {
    return this.http.get(this.apiUrl + query);
  }
}

export class BookDataModel {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  info: string;
  preview: string;
}
