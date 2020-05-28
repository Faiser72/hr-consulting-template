import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule } from "@angular/router";
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule
} from "@angular/material";

import { CandidatesModule } from "./admin/candidates/candidates.module";
import { LoginModule } from "./login/login.module";
import { DefaultModule } from "./layouts/default/default.module";
import { DefaultComponent } from "./layouts/default/default.component";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    MatButtonModule,
    DefaultModule,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
