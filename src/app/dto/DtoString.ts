export class DtoString {
  private _str: string;

  constructor(str: string) {
    this._str = str;
  }


  get str(): string {
    return this._str;
  }

  set str(value: string) {
    this._str = value;
  }
}
