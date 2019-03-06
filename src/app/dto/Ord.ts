import {Serializable} from 'selenium-webdriver';

export class Ord {
  private id: number;
  private user: number;
  private date: string;
  private status: number;
  private dishes: string;


  constructor(id: number, user: number, date: string, status: number, dishes: string) {
    this.id = id;
    this.user = user;
    this.date = date;
    this.status = status;
    this.dishes = dishes;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getUser(): number {
    return this.user;
  }

  setUser(value: number) {
    this.user = value;
  }

  getDate(): string {
    return this.date;
  }

  setDate(value: string) {
    this.date = value;
  }

  getStatus(): number {
    return this.status;
  }

  setStatus(value: number) {
    this.status = value;
  }

  getDishes(): string {
    return this.dishes;
  }

  setDishes(value: string) {
    this.dishes = value;
  }
}
