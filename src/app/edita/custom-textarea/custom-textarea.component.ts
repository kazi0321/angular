import { Component, OnInit, Input } from '@angular/core';
import { CtStringsService } from './ct-strings.service';
import { ContinuousIDService } from './continuous-id.service';
import { getBytes, KeyCode, STR } from './utils';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.css'],
})
export class CustomTextareaComponent implements OnInit {

  public tfKey: string;
  private n2t: HTMLElement;

  constructor(public text: CtStringsService, public idService: ContinuousIDService) { }


  ngOnInit() {
    this.tfKey = 'input';
    this.idService.init(this.tfKey);
    for (let i = 0; i < this.text.row; i++) {
      this.idService.toIssue(this.tfKey);
    }
    this.n2t = document.getElementById('n2t');
  }


  /**
   * idx行目のテキストフィールドをフォーカスする
   * @param event イベント
   * @param idx 行番号
   */
  private focusTF(event, idx: number): void {
    document.getElementById(this.idService.get(this.tfKey, idx)).focus();
  }


  /**
   * キーイベント
   * @param event
   * @param idx 行番号
   */
  private keyEvent(event, idx: number): void {
    switch (event.keyCode) {
      case KeyCode.Enter:
        this.onEnter(event, idx);
        break;
      case KeyCode.BackSpace:
        this.onBackSpace(event, idx);
        break;
      default:
        break;
    }
  }
  private onEnter(event, idx: number): void {
    if (event.target.value === STR.EMPTY) {
      this.text.body.splice(idx + 1, 0, []);
      document.getElementById(this.idService.get(this.tfKey, idx + 1)).focus();
    } else {
      this.text.add(idx, event.target.value);
      event.target.value = STR.EMPTY;
      const tf = <HTMLInputElement>document.getElementById(this.idService.get(this.tfKey, idx));
      tf.size = getBytes(tf.value.length) + 1;
    }
  }
  private onBackSpace(event, idx: number): void {
    if (event.target.value === STR.EMPTY && this.text.body[idx].length !== 0) {
      const str = this.text.body[idx].pop();
      const tf = <HTMLInputElement>document.getElementById(this.idService.get(this.tfKey, idx));
      tf.value = str;
      tf.size = getBytes(tf.value.length) + 1;
    }
  }


  private onInput(event, idx) {
    const tf = <HTMLInputElement>document.getElementById(this.idService.get(this.tfKey, idx));
    tf.size = getBytes(tf.value) + 1;
  }


}

