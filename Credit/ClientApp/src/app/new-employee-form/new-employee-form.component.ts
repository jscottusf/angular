import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  EmployeeDataModel,
  EmployeeService,
} from "../../Services/employees.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "newEmpForm",
  templateUrl: "./new-employee-form.component.html",
  styleUrls: ["./new-employee-form.component.css"],
})
export class NewEmployeeFormComponent implements OnInit {
  @Output() onAddEmployee = new EventEmitter();

  public empModel: EmployeeDataModel;

  constructor(private employee: EmployeeService) {
    this.resetForm();
    this.onSubmit(employee);
  }

  ngOnInit() {}

  resetForm(employee?: NgForm) {
    if (employee != null) employee.resetForm();
    this.empModel = {
      id: null,
      firstName: "",
      lastName: "",
      gender: "",
      city: "",
      department: "",
    };
  }

  onSubmit(form: NgForm) {
    this.employee.postNewEmployee(form.value).subscribe(
      (res) => {
        this.resetForm(form);
        this.employee.getallEmployees();
        this.onAddEmployee.emit();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
