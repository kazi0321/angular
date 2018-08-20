import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TutorComponent } from './tutor.component';
import { TutorService } from './tutor.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TutorComponent,
  ],
  entryComponents: [
    TutorComponent
  ],
  providers: [
    TutorService
  ]
})
export class TutorModule { }
