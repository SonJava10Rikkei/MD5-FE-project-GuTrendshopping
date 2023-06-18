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

  createCategoryService(category: Category): Observable<any> {
    return this.httpClient.post<any>(this.API_CATEGORY, category);
  }

  getListService(): Observable<any> {
    return this.httpClient.get(this.API_CATEGORY)
  }

  getCategoryById(id: number): Observable<any> {
    return this.httpClient.get(this.API_CATEGORY + '/' + id);
    // return this.httpClient.get(`${this.API_CATEGORY}/${id}`)
  }

  updateCategory(id: number, category: Category): Observable<any> {
    return this.httpClient.put(this.API_CATEGORY + '/' + id, category);
  }
}
