import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorComponent } from './calculator.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    CalculatorRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [CalculatorComponent]
})
export class CalculatorModule { }
