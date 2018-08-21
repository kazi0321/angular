import { Component, OnInit } from '@angular/core';
import { TutorService } from './tutor.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent implements OnInit {

  constructor(private tutor: TutorService) { }

  ngOnInit() {
  }

  detach() {
    this.tutor.detach();
  }

}
