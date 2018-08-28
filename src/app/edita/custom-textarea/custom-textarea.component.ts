import { Component, OnInit, Input } from '@angular/core';
import { CtStringsService } from './ct-strings.service';

const emptyStr = '';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.css'],
})
export class CustomTextareaComponent implements OnInit {

  @Input() lineColored: string;
  private focusIdx: number;

  constructor(private text: CtStringsService) { }

  ngOnInit() {
    this.focusIdx = 0;
  }

  private initTextField(event: Event, idx: number): void {
    if (this.text.isInput(this.focusIdx)) {
      this.text.reverseInputState(this.focusIdx);
    }
    this.focusIdx = idx;
    if (!this.text.isInput(idx)) {
      this.text.reverseInputState(idx);
    }
  }

  private enter(event, idx): void {
    if (!(event.target.value === emptyStr)) {
      this.text.add(idx, event.target.value);
      event.target.value = emptyStr;
    }
  }

}
