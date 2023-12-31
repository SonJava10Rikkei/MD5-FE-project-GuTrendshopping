import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/Category";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  //API_LOCAL
  private API_CATEGORY = environment.API_LOCAL + 'category'

  //API_SERVER

  // private API_CATEGORY = environment.API_SERVER + 'category'



  constructor(private httpClient: HttpClient) {
  }
  getListCategoryService(): Observable<any> {
    return this.httpClient.get(this.API_CATEGORY)
  }
  getCategoryDetailByIdService(id: number): Observable<any> {
    return this.httpClient.get(this.API_CATEGORY + '/' + id);
    // return this.httpClient.get(`${this.API_CATEGORY}/${id}`)
  }
  getPageCategoryService(request: any): Observable<any> {
    const params = request;
    return this.httpClient.get(this.API_CATEGORY+'/page', {params})
  }
  createCategoryService(category: Category): Observable<any> {
    return this.httpClient.post<any>(this.API_CATEGORY+'/create', category);
  }

  updateCategoryService(id: number, category: Category): Observable<any> {
    return this.httpClient.put(this.API_CATEGORY + '/update/' + id, category);
  }

  deleteCategoryService(id: number): Observable<any> {
    return this.httpClient.delete(this.API_CATEGORY + '/delete/' + id);
  }


}
