import { Component, OnInit, Testability } from '@angular/core';

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
  value = 0;
  mode = "determinate";
  constructor() { }

  ngOnInit() {
    // this.result();
  }
  result() {
    this.outputs = []; //一回空にする処理(出来ているのか怪しい)
    let json_text = '{ "a" : 100, "b" : 200, "c" : 300 }';
    this.tests = JSON.parse(json_text);
    for (this.tests.key in this.tests) {
      this.outputs.push({ name: this.tests[this.tests.key] });
    }
  }
}


