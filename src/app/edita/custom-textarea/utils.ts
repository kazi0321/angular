/**
 * strのバイト数を返す
 * @param str 計算対象
 */
export const getBytes = (str) => unescape(encodeURIComponent(str)).length;

export enum KeyCode {
    Enter = 13,
    BackSpace = 8,
    Space = 32,
}

export enum STR {
    EMPTY = '',
}
