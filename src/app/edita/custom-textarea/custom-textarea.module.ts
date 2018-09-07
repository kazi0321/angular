import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTextareaComponent } from './custom-textarea.component';
import { MatChipsModule, MatListModule, MatIconModule } from '@angular/material';
import {CtStringsService} from './ct-strings.service';
import {ContinuousIDService} from './continuous-id.service';

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
  ],
  declarations: [CustomTextareaComponent],
  providers: [
    CtStringsService,
    ContinuousIDService,
  ],
  exports: [
    CustomTextareaComponent,
  ]
})
export class CustomTextareaModule { }
