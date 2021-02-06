export class Customer {
  private id: number;
  private name: string;
  private mobileNumber: string;
  private mail: string;
  private password: string;


  constructor(id: number, name: string, mobileNumber: string, mail: string, password: string) {
    this.id = id;
    this.name = name;
    this.mobileNumber = mobileNumber;
    this.mail = mail;
    this.password = password;
  }

  public getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getMobileNumber(): string {
    return this.mobileNumber;
  }

  setMobileNumber(value: string) {
    this.mobileNumber = value;
  }

  getMail(): string {
    return this.mail;
  }

  setMail(value: string) {
    this.mail = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string) {
    this.password = value;
  }
}
