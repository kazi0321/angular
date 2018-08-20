import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import {CdkOverlayOrigin} from '@angular/cdk/overlay';
import { TutorService } from '../tutor/tutor.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, OnDestroy {

  @ViewChild(CdkOverlayOrigin) origin: CdkOverlayOrigin;

  constructor(private tutor: TutorService) { }

  ngOnInit() {
    this.tutor.attach(this.origin.elementRef);
  }

  ngOnDestroy() {
    this.tutor.detach();
  }

}
