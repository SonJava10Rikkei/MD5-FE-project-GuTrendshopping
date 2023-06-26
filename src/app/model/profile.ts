export class Profile{

  public name?: string;
  public avatar?: string;
  public password?: string;

  constructor(name: string, avatar: string, password: string) {
    this.name = name;
    this.avatar = avatar;
    this.password = password;
  }
}
