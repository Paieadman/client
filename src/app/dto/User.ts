export class User {
  private login: string;
  private password: string;
  private name: string;
  private role: string;


  constructor(login: string, password: string, name: string, role: string) {
    this.login = login;
    this.password = password;
    this.name = name;
    this.role = role;
  }

  getLogin(): string {
    return this.login;
  }

  setlogin(value: string) {
    this.login = value;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(value: string) {
    this.password = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getRole(): string {
    return this.role;
  }

  setRole(value: string) {
    this.role = value;
  }
}
