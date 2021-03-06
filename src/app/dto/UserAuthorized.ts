export class UserAuthorized {
  private login: string;
  private password: string;
  private name: string;
  private role: string;
  private active: number;


  constructor(login: string, password: string, name: string, role: string, active: number) {
    this.login = login;
    this.password = password;
    this.name = name;
    this.role = role;
    this.active = active;
  }

  getLogin(): string {
    return this.login;
  }

  setLogin(value: string) {
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

  getActive(): number {
    return this.active;
  }

  setActive(value: number) {
    this.active = value;
  }
}
