import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from "./dashboard.component";
import {IonicModule} from "@ionic/angular";
import {ScannerComponent} from "./scanner/scanner.component";


@NgModule({
  declarations: [DashboardComponent, ScannerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    IonicModule
  ],
})
export class DashboardModule { }
