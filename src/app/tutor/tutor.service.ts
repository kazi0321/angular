import { Injectable, ElementRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private overlayRef: OverlayRef;
  private attachFlg = false;

  constructor(private overlay: Overlay) { }

  public attach(elref: ElementRef, component) {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().connectedTo(
        elref,
        {originX: 'start', originY: 'top'},
        {overlayX: 'start', overlayY: 'top'}
      )
    });
    this.overlayRef.attach(new ComponentPortal(component));
    this.attachFlg = true;
  }

  public detach() {
    this.overlayRef.detach();
    this.attachFlg = false;
  }

  public get isAttach(): boolean {
    return this.attachFlg;
  }

}
