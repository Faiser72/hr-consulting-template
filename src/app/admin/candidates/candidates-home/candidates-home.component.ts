import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-candidates-home",
  templateUrl: "./candidates-home.component.html",
  styleUrls: ["./candidates-home.component.css"]
})
export class CandidatesHomeComponent implements OnInit {
  candidatesCount = 300;
  constructor(private router: Router) {}

  ngOnInit() {}

  routetoaddcandidates = () => {
    this.router.navigate(["/home/candidatehme/addcandidates"]);
  };
}
