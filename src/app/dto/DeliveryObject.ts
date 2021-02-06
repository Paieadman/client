import {Dish} from './Dish';

export class DeliveryObject {
  private street: string;
  private house: string;
  private flat: string;
  private delivery: Dish[];


  constructor(street: string, house: string, flat: string, delivery: Dish[]) {
    this.street = street;
    this.house = house;
    this.flat = flat;
    this.delivery = delivery;
  }

  getStreet(): string {
    return this.street;
  }

  setStreet(value: string) {
    this.street = value;
  }

  getHouse(): string {
    return this.house;
  }

  setHouse(value: string) {
    this.house = value;
  }

  getFlat(): string {
    return this.flat;
  }

  setFlat(value: string) {
    this.flat = value;
  }

  getDelivery(): Dish[] {
    return this.delivery;
  }

  setDelivery(value: Dish[]) {
    this.delivery = value;
  }
}
