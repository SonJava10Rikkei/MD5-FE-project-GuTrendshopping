export class SignUpForm{
  private name: string;
  private username: string;
  private email: string;
  private password: string;
  private roles: any;

  constructor(name: string, username: string, email: string, password: string) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roles = ['admin-user-home'];
  }

}
