import { Component, OnInit, Testability, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from '../get-data.service';
import { RunService } from '../editor/run.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, OnDestroy {

  outputs: string[] = [];
  private sub: Subscription;

  constructor(private runService: RunService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  result() {
    this.sub = this.runService.result.subscribe(res => {
      res.answer.forEach(str => this.outputs.push);
    });
  }
}


