import { HttpClient } from "@angular/common/http";
import { inject, Inject, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

export class EmployeeService implements OnInit {
  appurl: string = "";

  constructor(
    private httpobj: HttpClient,
    @Inject("BASE_URL") _baseurl: string
  ) {
    this.appurl = _baseurl + "api/employees/";
  }

  ngOnInit() {}

  getallEmployees(): Observable<EmployeeDataModel> {
    return this.httpobj.get<EmployeeDataModel>(this.appurl);
  }

  getEmployeeById(id): Observable<EmployeeDataModel> {
    return this.httpobj.get<EmployeeDataModel>(this.appurl + id);
  }

  postNewEmployee(formData: EmployeeDataModel) {
    return this.httpobj.post(this.appurl, formData);
  }

  deleteEmployee(id: number) {
    return this.httpobj.delete(this.appurl + id);
  }

  editEmployee(id: number, formData: EmployeeDataModel) {
    return this.httpobj.put(this.appurl + id, formData);
  }
}

export class EmployeeDataModel {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  gender: string;
  department: string;
}
