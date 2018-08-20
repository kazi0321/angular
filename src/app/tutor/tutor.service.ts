import { Injectable, ElementRef, Component } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { TutorComponent } from './tutor.component';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private overlayRef: OverlayRef;

  constructor(private overlay: Overlay) { }

  public attach(elref: ElementRef) {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().connectedTo(
        elref,
        {originX: 'start', originY: 'top'},
        {overlayX: 'start', overlayY: 'top'}
      )
    });
    this.overlayRef.attach(new ComponentPortal(TutorComponent));
  }

  public detach() {
    this.overlayRef.detach();
  }
}
