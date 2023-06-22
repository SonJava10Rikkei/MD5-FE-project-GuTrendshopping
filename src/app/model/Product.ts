export class Product {
  public id?: number;
  private name?:string;
  private category?:string;
  private price?:number;
  private quantity?:number;
  private avatar?:string;
  private description?:string;


  constructor(name: string, category: string, price: number, quantity: number, avatar: string, description: string) {
    this.name = name;
    this.category = category;
    this.price = price;
    this.quantity = quantity;
    this.avatar = avatar;
    this.description = description;
  }
}
