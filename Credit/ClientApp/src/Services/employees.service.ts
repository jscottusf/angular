import { HttpClient } from "@angular/common/http";
import { inject, Inject } from "@angular/core";
import { Observable } from "rxjs";

export class EmployeeService {
  appurl: string = "";

  constructor(private httpobj : HttpClient, @Inject('BASE_URL') _baseurl : string) {
    this.appurl = _baseurl;
  }

  getallEmployees(): Observable<EmployeeDataModel> {
    return this.httpobj.get<EmployeeDataModel>(this.appurl + "api/employee/index");
  }

}

export class EmployeeDataModel {
  empid: number;
  name: string;
  gender: string;
  city: string;
  department: string;
}