import { Component, OnInit } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TutorComponent } from '../tutor/tutor.component';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  constructor(private overlay: Overlay) { }

  ngOnInit() {
    const overlayRef = this.overlay.create();
    overlayRef.attach(new ComponentPortal(TutorComponent));
  }

}
