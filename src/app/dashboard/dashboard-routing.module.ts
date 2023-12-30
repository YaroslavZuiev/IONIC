import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {ScannerComponent} from "./scanner/scanner.component";

const routes: Routes = [
  {
    path:'',
    component: DashboardComponent,
  },
  {
    path:'scanner',
    component: ScannerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
