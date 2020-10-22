import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet.component';

@NgModule({
  declarations: [
    PetComponent
  ],
  imports: [
    BrowserModule,
    PetRoutingModule
  ],
  providers: [],
  bootstrap: [PetComponent]
})
export class PetModule { }
