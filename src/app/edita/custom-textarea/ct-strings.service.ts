import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CtStringsService {

  private text: string[][];

  constructor() {
    this.text = [['assssssssssss', 'assssssssssss', 'assssssssssss'], ['z'], ['x'], ['v'], ['b']];
  }

  public getWord(row: number, col: number): string {
    return this.text[row][col];
  }

  public get row(): number {
    return this.text.length;
  }

  public col(row: number): number {
    return this.text[row].length;
  }


  public add(row: number, word: string): void {
    this.text[row].push(word);
  }

  public get body() {
    return this.text;
  }

  public draw(y: number, x: number) {
    return this.text[y].splice(x, 0);
  }

  public exchange(lY, lX, rY, rX): void {
    const l = this.text[lY].splice(lX, 1)[0];
    const r = this.text[rY].splice(rX, 1)[0];
    this.text[lY].splice(lX, 0, r);
    this.text[rY].splice(rX, 0, l);
  }

}
