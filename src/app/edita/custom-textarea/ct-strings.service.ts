import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CtStringsService {

  private texts: string[][];
  private textsColor: string[];
  private inputStates: boolean[];

  constructor() {
    this.texts = [['assssssssssss'], [''], [''], [''], ['']];
    this.textsColor = [];
    this.inputStates = [];
    this.texts.forEach(() => {
      this.textsColor.push('white');
      this.inputStates.push(false);
    });
  }

  public get text(): string[][] {
    return this.texts;
  }

  public get row(): number {
    return this.texts.length;
  }

  public getColor(row: number): string {
    return this.textsColor[row];
  }

  public setColor(row: number, color: string): void {
    this.textsColor[row] = color;
  }

  public isInput(row: number): boolean {
    return this.inputStates[row];
  }

  public reverseInputState(row: number) {
    this.inputStates[row] = !this.inputStates[row];
  }

  public get code(): string {
    return '';
  }


}
