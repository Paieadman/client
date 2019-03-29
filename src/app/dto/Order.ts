export class Order {
  private id: number;
  private user: number;
  private date: string;
  private status: number;
  private cook: number;

  constructor(id: number, user: number, date: string, status: number, cook: number) {
    this.id = id;
    this.user = user;
    this.date = date;
    this.status = status;
    this.cook = cook;
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

  getCook(): number {
    return this.cook;
  }

}
