import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatIconModule, MatListModule } from "@angular/material";
import { AddcandidatesComponent } from "./addcandidates/addcandidates.component";

@NgModule({
  declarations: [AddcandidatesComponent],
  imports: [CommonModule, MatIconModule, MatListModule]
})
export class CandidatesModule {}
