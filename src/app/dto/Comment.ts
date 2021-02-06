export class Comment {
  private _id: number;
  private _userName: string;
  private _text: string;


  constructor(id: number, userName: string, text: string) {
    this._id = id;
    this._userName = userName;
    this._text = text;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
