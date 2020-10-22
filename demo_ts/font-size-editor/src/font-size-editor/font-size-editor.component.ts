import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'font-size-editor-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.scss']
})
export class FontSizeEditorComponent implements OnInit {
  fontSize = 14;
  constructor() { }
  onChange(value) {
    this.fontSize = value;
  }
  ngOnInit() {
  }

}
