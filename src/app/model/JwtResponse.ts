export class JwtResponse {
  public name?:string;
  public avatar?:string;
  public token?:string;
  public role?:string[];

  constructor(name: string, avatar: string, token: string, role: string[]) {
    this.name = name;
    this.avatar = avatar;
    this.token = token;
    this.role = role;
  }
}
