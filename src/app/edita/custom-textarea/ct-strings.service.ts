import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CtStringsService {

  private texts: string[][];
  private inputStates: boolean[];

  constructor() {
    this.texts = [['assssssssssss'], [''], [''], [''], ['']];
    this.inputStates = [];
    this.texts.forEach(() => {
      this.inputStates.push(false);
    });
  }

  public get text(): string[][] {
    return this.texts;
  }

  public get row(): number {
    return this.texts.length;
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
