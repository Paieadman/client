export class Card {
  private id: number;
  private orderId: number;
  private dish: number;

  constructor(id: number, orderId: number, dish: number) {
    this.id = id;
    this.orderId = orderId;
    this.dish = dish;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getOrder(): number {
    return this.orderId;
  }

  setOrder(value: number) {
    this.orderId = value;
  }

  getDish(): number {
    return this.dish;
  }

  setDish(value: number) {
    this.dish = value;
  }
}
