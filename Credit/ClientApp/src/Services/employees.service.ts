import { HttpClient } from "@angular/common/http";
import { inject, Inject, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

export class EmployeeService implements OnInit {
  appurl: string = "";
  list: EmployeeDataModel[];

  constructor(
    private httpobj: HttpClient,
    @Inject("BASE_URL") _baseurl: string
  ) {
    this.appurl = _baseurl;
  }

  ngOnInit() {}

  getallEmployees(): Observable<EmployeeDataModel> {
    return this.httpobj.get<EmployeeDataModel>(this.appurl + "api/employees");
  }

  postNewEmployee(formData: EmployeeDataModel) {
    return this.httpobj.post(this.appurl + "api/employees", formData);
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
