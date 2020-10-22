import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontSizeEditorRoutingModule } from './font-size-editor-routing.module';
import { FontSizeEditorComponent } from './font-size-editor.component';

@NgModule({
  declarations: [
    FontSizeEditorComponent
  ],
  imports: [
    BrowserModule,
    FontSizeEditorRoutingModule
  ],
  providers: [],
  bootstrap: [FontSizeEditorComponent]
})
export class FontSizeEditorModule { }
