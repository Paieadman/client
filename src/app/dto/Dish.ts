import {Serializable} from 'selenium-webdriver';

export class Dish {
  private _id: number;
  private _composition: string;
  private _cost: number;
  private _image: string;
  private _name: string;
  private _category: string;


  constructor(id: number, composition: string, cost: number, image: string, name: string, category: string) {
    this._id = id;
    this._composition = composition;
    this._cost = cost;
    this._image = image;
    this._name = name;
    this._category = category;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get composition(): string {
    return this._composition;
  }

  set composition(value: string) {
    this._composition = value;
  }

  get cost(): number {
    return this._cost;
  }

  set cost(value: number) {
    this._cost = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }
}
