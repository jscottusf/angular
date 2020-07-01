import { Component, OnInit } from "@angular/core";
import {
  OfficeLocationService,
  LocationDataModel,
  Employee,
} from "../../Services/officelocations.service";

@Component({
  selector: "app-office-locations",
  templateUrl: "./office-locations.component.html",
  styleUrls: ["./office-locations.component.css"],
})
export class OfficeLocationsComponent implements OnInit {
  public officeLocations: LocationDataModel;
  constructor(private officeLocationService: OfficeLocationService) {
    this.getAllOfficeLocations();
  }

  ngOnInit() {}

  getAllOfficeLocations() {
    this.officeLocationService
      .getallLocations()
      .subscribe((data) => (this.officeLocations = data)),
      (err) => console.log(err);
  }
}
