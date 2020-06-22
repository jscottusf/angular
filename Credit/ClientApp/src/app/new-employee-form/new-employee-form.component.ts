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

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
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
    this.service.postNewEmployee(form.value).subscribe(
      (res) => {
        debugger;
        this.resetForm(form);
        this.onAddEmployee.emit();
      },
      (err) => {
        debugger;
        console.log(err);
      }
    );
  }
}
