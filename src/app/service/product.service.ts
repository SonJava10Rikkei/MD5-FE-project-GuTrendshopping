import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //API_LOCAL
  private API_PRODUCT = environment.API_LOCAL + 'product'

  //API_SERVER

  // private API_CATEGORY = environment.API_SERVER + 'product'
  constructor(private httpClient: HttpClient) {
  }
  createProductService(product:Product):Observable<any>{
    return this.httpClient.post(this.API_PRODUCT+'/create', product)
  }
}
