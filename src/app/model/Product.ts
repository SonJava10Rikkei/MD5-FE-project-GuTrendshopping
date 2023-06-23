export class Product {
  private id?: number;
  public name?:string;
  public category?:any;
  public price?:number;
  public quantity?:number;
  public avatar?:string;
  public description?:string;


  constructor(name: string, category: any, price: number, quantity: number, avatar: string, description: string) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
    this.avatar = avatar;
    this.description = description;
  }
}
