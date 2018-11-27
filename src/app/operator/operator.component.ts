import { Component, OnInit } from '@angular/core';
import { CodeService } from '../editor/code.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  constructor(private codeService: CodeService, private http: HttpClient) { }

  ngOnInit() {
  }

  run(): void {

  }

}
