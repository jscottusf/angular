import { Component, OnInit, Input, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {
  EmployeeDataModel,
  EmployeeService,
} from "../../Services/employees.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  alertShow = false;
  alertMessage = "";
  alertType = "";
  public emplist: EmployeeDataModel;
  constructor(private serviceEmployee: EmployeeService) {
    this.getAllEmployees();
  }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.serviceEmployee.getallEmployees().subscribe(
      (data) => (this.emplist = data),
      (err) => {
        console.log(err);
      }
    );
  }

  deleteEmployee(id) {
    this.serviceEmployee.deleteEmployee(id).subscribe(
      (res) => {
        this.getAllEmployees();
        this.alertType = "danger";
        this.alertMessage = "Employee Removed";
        this.alertShow = true;
      },
      (err) => console.log(err)
    );
  }

  exexOnAddEmp($event: any) {
    this.getAllEmployees();
    this.alertType = "success";
    this.alertMessage = "New Employee added successfully";
    this.alertShow = true;
  }

  exexOnDismiss($event: any) {
    this.alertShow = false;
  }

  exexOnEdit($event: any) {
    this.alertShow = true;
    this.alertMessage = "Employee changes updated sucessfully";
    this.alertType = "success";
  }
}
