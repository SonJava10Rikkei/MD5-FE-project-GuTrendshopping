import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class SizecolumnService {
  //API_LOCAL
  private API_CATEGORY = environment.API_LOCAL + 'sizecolumn'

  //API_SERVER

  // private API_CATEGORY = environment.API_SERVER + 'sizecolumn'
  constructor(private httpClient: HttpClient) { }

  getListSizeColumnService(): Observable<any> {
    return this.httpClient.get(this.API_CATEGORY)
  }
  getSizeColumnDetailByIdService(id: number): Observable<any> {
    return this.httpClient.get(this.API_CATEGORY + '/' + id);
    // return this.httpClient.get(`${this.API_CATEGORY}/${id}`)
  }
  getPageSizeColumnService(request: any): Observable<any> {
    const params = request;
    return this.httpClient.get(this.API_CATEGORY+'/page', {params})
  }
  createSizeColumnService(category: Category): Observable<any> {
    return this.httpClient.post<any>(this.API_CATEGORY+'/create', category);
  }

  updateSizeColumnService(id: number, category: Category): Observable<any> {
    return this.httpClient.put(this.API_CATEGORY + '/update/' + id, category);
  }

  deleteSizeColumnService(id: number): Observable<any> {
    return this.httpClient.delete(this.API_CATEGORY + '/delete/' + id);
  }


}
