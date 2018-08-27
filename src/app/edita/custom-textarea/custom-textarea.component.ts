import { Component, OnInit, Input } from '@angular/core';
import { CtStringsService } from './ct-strings.service';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.css'],
})
export class CustomTextareaComponent implements OnInit {

  @Input() lineColored: string;

  constructor(private text: CtStringsService) { }

  ngOnInit() {
  }

  private overColored(idx: number): void {
    if (this.lineColored !== null) {
      this.text.setColor(idx, this.lineColored);
    }
  }

  private leaveColored(idx: number): void {
    this.text.setColor(idx, 'white');
  }

  private initTextField(event: Event, idx: number): void {
    this.text.reverseInputState(idx);
  }

}
