import { Component, OnInit, Input, EventEmitter } from "@angular/core";
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
  @Input() closeModal: string;
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
    if (confirm("Are you sure?")) {
      this.serviceEmployee.deleteEmployee(id).subscribe(
        (res) => this.getAllEmployees(),
        (err) => console.log(err)
      );
    }
  }

  exexOnAddEmp($event: any) {
    this.getAllEmployees();
  }
}
