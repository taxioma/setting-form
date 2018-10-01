export class User {
  protected login: string;
  private password: string;

  public setLogin(val) {
    this.login = val;
  }
  public setPass(val) {
    this.password = val;
  }

  public getLogin() {
    return this.login;
  }
  public  getPass() {
    return this.password;
  }
}

