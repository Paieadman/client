import {Injectable} from '@angular/core';

@Injectable()
export class OrderNumber {
  private value: number;
  public getValue(): number {
    return this.value;
  }
  public setValue(v: number) {
    this.value = v;
  }
}
