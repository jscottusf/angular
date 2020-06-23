import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  EmployeeDataModel,
  EmployeeService,
} from "../../Services/employees.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-edit-employee-form",
  templateUrl: "./edit-employee-form.component.html",
  styleUrls: ["./edit-employee-form.component.css"],
})
export class EditEmployeeFormComponent implements OnInit {
  id;
  public empData: EmployeeDataModel;
  constructor(
    private route: ActivatedRoute,
    private serviceEmployee: EmployeeService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getEmployeeById(this.id);
  }

  ngOnInit() {}

  getEmployeeById(id) {
    this.serviceEmployee.getEmployeeById(id).subscribe(
      (data) => {
        console.log(data);
        this.empData = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
