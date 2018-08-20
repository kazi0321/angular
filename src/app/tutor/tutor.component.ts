import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutor',
  template: '',
  styles: [
    `:host {
      position: fixed;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
    }`
  ]
})
export class TutorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
