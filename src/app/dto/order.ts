import {Serializable} from 'selenium-webdriver';

export class Order {
  private id: number;
  private userid: number;
  private dateorder: string;
  private idstatus: number;
  private dishes: string;


  constructor(_id: number, _userid: number, _dateorder: string, _idstatus: number, _dishes: string) {
    this.id = _id;
    this.userid = _userid;
    this.dateorder = _dateorder;
    this.idstatus = _idstatus;
    this.dishes = _dishes;
  }


  public getId(): number {
    return this.id;
  }

  public setId(value: number) {
    this.id = value;
  }

  public getUserid(): number {
    return this.userid;
  }

  public setUserid(value: number) {
    this.userid = value;
  }

  public getDateorder(): string {
    return this.dateorder;
  }

  public setDateorder(value: string) {
    this.dateorder = value;
  }

  public getIdstatus(): number {
    return this.idstatus;
  }

  public setIdstatus(value: number) {
    this.idstatus = value;
  }

  public getDishes(): string {
    return this.dishes;
  }

  public setDishes(value: string) {
    this.dishes = value;
  }
}
