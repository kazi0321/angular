import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edita',
  templateUrl: './edita.component.html',
  styleUrls: ['./edita.component.css']
})
export class EditaComponent implements OnInit {

  private editorRows: number;
  private lineFeedCode: string;
  private editorInit: string;

  constructor() { }

  ngOnInit() {
    this.editorRows = 10;
    this.lineFeedCode = '&#13;';
    this.editorInit = this.lineFeedCode.repeat(this.editorRows);
  }

}
