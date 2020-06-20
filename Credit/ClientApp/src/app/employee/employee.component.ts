import { Component, OnInit, Input } from "@angular/core";
import {
  EmployeeDataModel,
  EmployeeService,
} from "../../Services/employees.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  public emplist: EmployeeDataModel;

  constructor(private serviceEmployee: EmployeeService) {
    this.getAllEmployees();
  }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.serviceEmployee
      .getallEmployees()
      .subscribe((data) => (this.emplist = data));
  }

  exexOnAddEmp($event: any) {
    this.getAllEmployees();
  }
}
