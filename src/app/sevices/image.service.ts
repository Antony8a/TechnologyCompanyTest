import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Image } from '../models/image';



@Injectable({
  providedIn: 'root'
})
export class ImageService {


  baseUrl = environment.apiUrl + 'lang=es&q=';
  baseUrlCategoria = environment.apiUrl + 'category=';
  constructor(private http: HttpClient) { }


  get(search: string): Observable<any> {
    const url = this.baseUrl + search;
    return this.http.get<any>(url);
  }

  getCategory(category: string): Observable<any> {
    const url = this.baseUrlCategoria + category;
    return this.http.get<any>(url);
  }

}
