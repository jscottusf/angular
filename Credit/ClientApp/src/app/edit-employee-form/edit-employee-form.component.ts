import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
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
  success = false;
  constructor(
    private router: Router,
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
        this.empData = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  editEmployee(form: NgForm) {
    this.serviceEmployee.editEmployee(this.id, form.value).subscribe((res) => {
      this.router.navigate(["/"]);
    }),
      (err) => {
        debugger;
        console.log(err);
      };
  }
}
