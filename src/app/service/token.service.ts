import {Injectable} from '@angular/core';

const NAME_KEY = 'Name_key';
const AVATAR_KEY = 'Avatar_Key';
const TOKEN_KEY = 'Token_Key';
const ROLE_KEY = 'Role_Key'

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private roles?: string[];

  constructor() {
  }

  public setName(name: string) {
    sessionStorage.removeItem(NAME_KEY);
    sessionStorage.setItem(NAME_KEY, name);
  }

  public getName(): string {
    // @ts-ignore
    return sessionStorage.getItem(NAME_KEY);
  }

  public setAvatar(avatar: string) {
    sessionStorage.removeItem(AVATAR_KEY);
    sessionStorage.setItem(AVATAR_KEY, avatar);
  }

  public getAvatar(): string {
    // @ts-ignore
    return sessionStorage.getItem(AVATAR_KEY);
  }

  public setToken(token: string) {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    // @ts-ignore
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setRole(role: string[]) {
    sessionStorage.removeItem(ROLE_KEY);
    sessionStorage.setItem(ROLE_KEY, JSON.stringify(role));
  }

  public getRole(): string[] {
    this.roles = [];
    // @ts-ignore
    if (this.getToken()) {
      // @ts-ignore
      JSON.parse(sessionStorage.getItem(ROLE_KEY)).forEach(role => {
        this.roles?.push(role.authority)
      })
    }
    return this.roles;
  }
}
