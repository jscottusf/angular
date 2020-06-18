import { HttpClient } from "@angular/common/http";
import { inject, Inject } from "@angular/core";
import { Observable } from "rxjs";

export class EmployeeService {
  appurl: string = "";

  constructor(private httpobj : HttpClient, @Inject('BASE_URL') _baseurl : string) {
    this.appurl = _baseurl;
  }

  getallEmployees(): Observable<EmployeeDataModel> {
    return this.httpobj.get<EmployeeDataModel>(this.appurl + "api/employees");
  }

}

export class EmployeeDataModel {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  city: string;
  department: string;
}