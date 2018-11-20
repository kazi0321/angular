import { Component, OnInit, Testability } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Output {
  name: string,
}
@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  outputs: Output[] = [
    { name: '' },
  ];

  tests;
  json_text
  value = 0;
  mode = "determinate";
  configUrl ="http://localhost:3000/quotes";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.result();
  }
  result() {
    this.outputs = []; //一回空にする処理(出来ているのか怪しい)
    this.json_text = this.http.get(this.configUrl);
    this.json_text = JSON.parse(this.json_text);
    for (this.json_text.key in this.json_text) {
      this.outputs.push({ name: this.json_text[this.json_text.key] });
    }
  }
}


