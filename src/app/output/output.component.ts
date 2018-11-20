import { Component, OnInit, Testability } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from '../get-data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  outputs = []
  value = 0;
  mode = "determinate";
  configUrl = "http://localhost:3000/quotes";

  constructor(private http: HttpClient,
    private getdataservice: GetDataService,
  ) { }

  ngOnInit() {

  }
  result() {
    this.outputs = [];
    this.getdataservice.getData().subscribe(data => {
      this.outputs.push(data)
      console.log(this.outputs)
    })
  }
}


