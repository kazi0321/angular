import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  private _text: string[][] = [
    ['class test:'],
    ['  def aaa(self):'],
    ['    print("aaaaaaaaaaaaaaaaa")'],
    [],
    ['bbb = test()'],
    ['bbb.aaa()'],
    [],
    ['ccc = [i for i in range(5000)]'],
    ['print(ccc)']
  ];

  private _indexWidthSubject: Subject<number> = new Subject();
  private _indexWidthObservable: Observable<number> = this._indexWidthSubject.asObservable();

  public get text(): string[][] {
    return this._text;
  }

  public get indexWidthSubject(): Subject<number> {
    return this._indexWidthSubject;
  }

  public get indexWidthObservable(): Observable<number> {
    return this._indexWidthObservable;
  }

  public widthUpdate() {
    const digit = String(this._text.length).length;
    this._indexWidthSubject.next(digit * 10);
  }

  public toCode(): any {
    this._text.forEach(data => {
      if (data[data.length] !== '\n') {
        data.push('\n');
      }
    });
    console.log(this._text);
    return { python: this._text };
  }

  constructor() { }
}
