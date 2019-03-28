export class PersonalData {
  private _id: number;
  private _user: number;
  private _firstname: string;
  private _surname: string;
  private _age: string;
  private _sex: string;
  private _mobileNumber: string;
  private _avatar: string;


  constructor(id: number, user: number, firstname: string, surname: string, age: string, sex: string, mobileNumber: string, avatar: string) {
    this._id = id;
    this._user = user;
    this._firstname = firstname;
    this._surname = surname;
    this._age = age;
    this._sex = sex;
    this._mobileNumber = mobileNumber;
    this._avatar = avatar;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get user(): number {
    return this._user;
  }

  set user(value: number) {
    this._user = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get age(): string {
    return this._age;
  }

  set age(value: string) {
    this._age = value;
  }

  get sex(): string {
    return this._sex;
  }

  set sex(value: string) {
    this._sex = value;
  }

  get mobileNumber(): string {
    return this._mobileNumber;
  }

  set mobileNumber(value: string) {
    this._mobileNumber = value;
  }

  get avatar(): string {
    return this._avatar;
  }

  set avatar(value: string) {
    this._avatar = value;
  }
}
