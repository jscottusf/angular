import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
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
  closeResult = "";

  constructor(
    private service: EmployeeService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.form.reset();
    this.empModel = {
      id: 0,
      firstName: "",
      lastName: "",
      gender: "",
      city: "",
      department: "",
    };
  }

  onSubmit(form: NgForm) {
    if (this.empModel.id == 0) {
      this.addEmployee(form);
    } else {
      //
    }
  }

  addEmployee(form: NgForm) {
    this.service.postNewEmployee(form.value).subscribe(
      (res) => {
        this.resetForm(form);
        this.onAddEmployee.emit();
      },
      (err) => {
        debugger;
        console.log(err);
      }
    );
  }

  editEmployee(form: NgForm) {
    this.service.editEmployee(form.value.id, form.value).subscribe((res) => {
      this.resetForm(form);
      this.onAddEmployee.emit();
    }),
      (err) => {
        debugger;
        console.log(err);
      };
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}
