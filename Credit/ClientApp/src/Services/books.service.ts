import { HttpClient } from "@angular/common/http";
import { Inject, OnInit } from "@angular/core";
import { Observable } from "rxjs";

export class BookService implements OnInit {
  appurl: string = "";

  constructor(private http: HttpClient, @Inject("BASE_URL") _baseurl: string) {
    this.appurl = _baseurl + "api/books/";
  }

  ngOnInit() {}

  getallEmployees(): Observable<BookDataModel> {
    return this.http.get<BookDataModel>(this.appurl);
  }

  getEmployeeById(id): Observable<BookDataModel> {
    return this.http.get<BookDataModel>(this.appurl + id);
  }

  postNewEmployee(formData: BookDataModel) {
    return this.http.post(this.appurl, formData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.appurl + id);
  }

  editEmployee(id: number, formData: BookDataModel) {
    return this.http.put(this.appurl + id, formData);
  }
}

export class BookDataModel {
  bookId: number;
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  info: string;
  preview: string;
}
