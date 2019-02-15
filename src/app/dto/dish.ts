import {Serializable} from 'selenium-webdriver';

export class Dish {
  private _id: number;
  private _name: string;
  private _cost: number;


  constructor(id: number, name: string, cost: number) {
    this._id = id;
    this._name = name;
    this._cost = cost;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }
}
