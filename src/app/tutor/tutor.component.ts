import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TutorService } from './tutor.service';
import { trigger, state, transition, animate, style, } from '@angular/animations';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css'],
  animations: [
    trigger('feed', [
      state('in', style({'opacity': '1'})),
      state('out', style({'opacity': '0'})),
      transition('in => out', animate('.2s linear')),
      transition('out => in', animate('.2s linear')),
    ])
  ]
})
export class TutorComponent implements OnInit, AfterViewInit {

  private IN = 'in';
  private OUT = 'out';

  private feedState = this.OUT;

  constructor(private tutor: TutorService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.feedState = this.IN;
  }

  detachAnimation() {
    this.feedState = this.OUT;
  }

  detach() {
    if (this.feedState === this.OUT && this.tutor.isAttach) {
      this.tutor.detach();
    }
  }

}
