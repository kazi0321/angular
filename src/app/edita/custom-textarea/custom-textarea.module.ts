import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTextareaComponent } from './custom-textarea.component';
import { MatChipsModule, MatListModule, MatIconModule } from '@angular/material';
import {CtStringsService} from './ct-strings.service';

@NgModule({
  imports: [
    CommonModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
  ],
  declarations: [CustomTextareaComponent],
  providers: [CtStringsService],
  exports: [
    CustomTextareaComponent,
  ]
})
export class CustomTextareaModule { }
