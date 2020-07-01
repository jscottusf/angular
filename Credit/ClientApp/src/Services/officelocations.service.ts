import { HttpClient } from "@angular/common/http";
import { Inject, OnInit } from "@angular/core";
import { Observable } from "rxjs";

export class OfficeLocationService implements OnInit {
  appurl: string = "";

  constructor(
    private httpobj: HttpClient,
    @Inject("BASE_URL") _baseurl: string
  ) {
    this.appurl = _baseurl + "api/locations/";
  }

  ngOnInit() {}

  getallLocations(): Observable<LocationDataModel> {
    return this.httpobj.get<LocationDataModel>(this.appurl);
  }

  getLocationById(id): Observable<LocationDataModel> {
    return this.httpobj.get<LocationDataModel>(this.appurl + id);
  }

  deleteLocation(id: number) {
    return this.httpobj.delete(this.appurl + id);
  }
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  gender: string;
  department: string;
}

export class LocationDataModel {
  locationId: number;
  officeLocation: string;
  employees: Employee[];
}
