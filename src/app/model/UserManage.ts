export class UserManage {
  public id?: number;
  public avatar?: string;
  public email?: string;
  public name?: string;
  public status?: boolean;
  public role?: any;


  constructor(id: number, avatar: string, email: string, name: string, status: boolean, role: any) {
    this.id = id;
    this.avatar = avatar;
    this.email = email;
    this.name = name;
    this.status = status;
    this.role = role;
  }
}
