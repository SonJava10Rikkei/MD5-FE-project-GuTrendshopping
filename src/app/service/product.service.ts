import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/Product";
import {Observable} from "rxjs";
import {Category} from "../model/Category";



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //API_LOCAL
  private API_PRODUCT = environment.API_LOCAL + 'product'

  //API_SERVER

  // private API_PRODUCT = environment.API_SERVER + 'product'
  constructor(private httpClient: HttpClient) {
  }
  getListProductService(): Observable<any> {
    return this.httpClient.get(this.API_PRODUCT)
  }
  getProductByIdService(id: number): Observable<any> {
    return this.httpClient.get(this.API_PRODUCT + '/' + id);
  }
  createProductService(product:Product):Observable<any>{
    return this.httpClient.post(this.API_PRODUCT+'/create', product)
  }


  updateProductService(id: number, product: Product): Observable<any> {
    return this.httpClient.put(this.API_PRODUCT + '/' + id, product);
  }

  deleteProductService(id: number): Observable<any> {
    return this.httpClient.delete(this.API_PRODUCT + '/' + id);
  }

  getPageProductService(request: any): Observable<any> {
    const params = request;
    return this.httpClient.get(this.API_PRODUCT+'/page', {params})
  }
}
