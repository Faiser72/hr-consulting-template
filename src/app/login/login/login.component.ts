import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  valid(name: string, password: string): boolean {
    if (name == "veto" && password == "veto@1234") {
      alert("Access Granted");
      return true;
    } else {
      alert("Access Denied");
      return false;
    }
  }
}
