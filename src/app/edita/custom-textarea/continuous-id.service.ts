import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContinuousIDService {

  private ids: { [key: string]: string[] };

  constructor() {
    this.ids = {};
  }

  /**
   * 引数keyを連続するID群の総称とし初期化する
   * @param key
   */
  public init(key: string): void {
    this.ids[key] = [];
  }

  /**
   * 新しいIDを作成し返す。IDは key + 数字 の形式
   * @param key
   */
  public toIssue(key: string): string {
    const id = `${key}${this.ids[key].length}`;
    this.ids[key].push(id);
    return id;
  }

  /**
   * keyキーのID群からidx番目のIDを返す
   * @param key
   * @param idx
   */
  public get(key: string, idx: number): string {
    return this.ids[key][idx];
  }

  /**
   *
   * @param key
   */
  public pop(key: string): string {
    const last = this.ids[key].length - 1;
    return this.ids[key].splice(last, 1)[0];
  }

  /**
   *
   * @param key
   */
  public delete(key: string): void {
    this.ids[key].length = 0;
  }

  /**
   *
   * @param key
   */
  public length(key: string): number {
    return this.ids[key].length;
  }

  /**
   *
   * @param key
   */
  public doesKeyExist(key: string): boolean {
    return this.ids[key] ? false : true;
  }

  /**
   *
   * @param key
   * @param idx
   */
  public doesVelueExist(key: string, idx: number): boolean {
    return (idx[key][idx] === undefined) ? false : true;
  }

}
