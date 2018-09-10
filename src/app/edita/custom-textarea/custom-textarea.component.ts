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
  public focusTF(event, idx: number): void {
    document.getElementById(this.idService.get(this.tfKey, idx)).focus();
  }


  /**
   * キーイベント
   * @param event
   * @param idx 行番号
   */
  public keyEvent(event, idx: number): void {
    switch (event.keyCode) {
      case KeyCode.Enter:
        this.onEnter(event, idx);
        break;
      case KeyCode.BackSpace:
        this.onBackSpace(event, idx);
        break;
      case KeyCode.Space:
        this.onSpace(event, idx);
        break;
      default:
        break;
    }
  }
  public onEnter(event, idx: number): void {
    this.onSpace(event, idx);
    if (event.target.value === STR.EMPTY) {
      this.text.body.splice(idx + 1, 0, []);
      const idIdx = this.idService.get(this.tfKey, idx + 1);
      document.getElementById(idIdx).focus();
    }
  }
  public onBackSpace(event, idx: number): void {
    const tf = this.getInputElement(idx);

    if (tf.selectionStart === 0) {
      const value = this.text.isEmpty(idx) ? STR.EMPTY : this.text.pop(idx);
      console.log(`left: ${value}`);
      console.log(`right: ${tf.value}`);
      tf.value = `${value}${tf.value}`;
      console.log(tf.value);
      this.tfSizing(idx);
    }
  }
  public onSpace(event, idx: number): void {
    event.target.value = event.target.value.replace(/( |　)+/, STR.EMPTY);
    if (event.target.value !== STR.EMPTY) {
      this.text.add(idx, event.target.value);
      event.target.value = STR.EMPTY;
      this.tfSizing(idx);
    }
  }


  /**
   * 指定インデックスのテキストフォールドの可視長を入力文字列にラップする
   * @param idx
   */
  public tfSizing(idx: number): void {
    const tf = this.getInputElement(idx);
    tf.size = getBytes(tf.value) + 1;
  }


  /**
   * 指定インデックスのテキストフィールドのエレメントを返す
   * @param idx
   */
  public getInputElement(idx): HTMLInputElement {
    return <HTMLInputElement>document.getElementById(this.idService.get(this.tfKey, idx));
  }


}

