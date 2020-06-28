import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeService } from "../Services/employees.service";
import { NewEmployeeFormComponent } from "./new-employee-form/new-employee-form.component";
import { ModalComponent } from "./modal/modal.component";
import { EditEmployeeFormComponent } from "./edit-employee-form/edit-employee-form.component";
import { AlertComponent } from "./alert/alert.component";
import { BookSearchComponent } from "./book-search/book-search.component";
import { GoogleBookService } from "../Services/googlebooks.service";
import { BookService } from "src/Services/books.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    EmployeeComponent,
    NewEmployeeFormComponent,
    ModalComponent,
    EditEmployeeFormComponent,
    AlertComponent,
    BookSearchComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: EmployeeComponent },
      { path: "employees/:id", component: EditEmployeeFormComponent },
      { path: "booksearch", component: BookSearchComponent },
    ]),
    NgbModule,
  ],
  providers: [EmployeeService, GoogleBookService, BookService],
  bootstrap: [AppComponent],
})
export class AppModule {}
