import { Component, OnInit } from "@angular/core";
import { NgModule } from "@angular/core";
import { MatCalendarCellCssClasses } from "@angular/material/datepicker";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  //total counts
  companiesCount: number = 23;
  candidatesCount: number = 16;
  interviewsCount: number = 56;
  jobsCount: number = 68;
  // active counts
  activeCompaniesCount: number = 18;
  activeCandidatesCount: number = 56;
  activeInterviewsCount: number = 12;
  activeJobsCount: number = 29;

  constructor() {}

  ngOnInit() {}
}
