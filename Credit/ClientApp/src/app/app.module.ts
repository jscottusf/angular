import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeService } from "../Services/employees.service";
import { NewEmployeeFormComponent } from "./new-employee-form/new-employee-form.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    EmployeeComponent,
    NewEmployeeFormComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([{ path: "", component: EmployeeComponent }]),
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
