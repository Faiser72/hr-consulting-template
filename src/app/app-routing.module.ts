import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidatesHomeComponent } from "./admin/candidates/candidates-home/candidates-home.component";
import { LoginComponent } from "./login/login/login.component";
import { DefaultComponent } from "./layouts/default/default.component";
import { DashboardComponent } from "./modules/dashboard/dashboard.component";
import { PostsComponent } from "./modules/posts/posts.component";
import { CompanyhomeComponent } from "./admin/companies/companyhome/companyhome.component";
import { JobhomeComponent } from "./admin/job/jobhome/jobhome.component";
import { UsershomeComponent } from "./users/usershome/usershome.component";
import { InterviewshomeComponent } from "./admin/interviews/interviewshome/interviewshome.component";
import { InvoicehomeComponent } from "./admin/invoice/invoicehome/invoicehome.component";
import { AddcandidatesComponent } from "./admin/candidates/addcandidates/addcandidates.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "home",
    component: DefaultComponent,
    children: [
      { path: "", component: DashboardComponent },
      { path: "dashboard", component: DashboardComponent },
      { path: "posts", component: PostsComponent },
      {
        path: "candidatehme",
        component: CandidatesHomeComponent,
        children: [{ path: "addcandidates", component: AddcandidatesComponent }]
      },

      { path: "companyhme", component: CompanyhomeComponent },
      { path: "jobshme", component: JobhomeComponent },
      { path: "usershme", component: UsershomeComponent },
      { path: "interviewhme", component: InterviewshomeComponent },
      { path: "invoicehme", component: InvoicehomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
