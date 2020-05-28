import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DefaultComponent } from "./default.component";
import { DashboardComponent } from "src/app/modules/dashboard/dashboard.component";
import { RouterModule } from "@angular/router";
import { PostsComponent } from "src/app/modules/posts/posts.component";
import { SharedModule } from "src/app/shared/shared.module";
import {
  MatSidenavModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule
} from "@angular/material";
import { CandidatesHomeComponent } from "src/app/admin/candidates/candidates-home/candidates-home.component";
import { CompanyhomeComponent } from "src/app/admin/companies/companyhome/companyhome.component";
import { JobhomeComponent } from "src/app/admin/job/jobhome/jobhome.component";
import { UsershomeComponent } from "src/app/users/usershome/usershome.component";
import { InterviewshomeComponent } from "src/app/admin/interviews/interviewshome/interviewshome.component";
import { InvoicehomeComponent } from "src/app/admin/invoice/invoicehome/invoicehome.component";

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    CandidatesHomeComponent,
    CompanyhomeComponent,
    JobhomeComponent,
    UsershomeComponent,
    InterviewshomeComponent,
    InvoicehomeComponent,
    JobhomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ]
})
export class DefaultModule {}
