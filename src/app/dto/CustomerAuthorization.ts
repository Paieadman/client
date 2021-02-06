export class CustomerAuthorization {
  private mail: string;
  private password: string;


    constructor(mail: string, password: string) {
    this.mail = mail;
    this.password = password;
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
