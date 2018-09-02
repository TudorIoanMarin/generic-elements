import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericElementsService {

  constructor(private http: HttpClient) { }

  getEntitiesByPath(entityPath: string): Observable<any> {
    return this.http.get(entityPath);
  }

  postEntitiesByPath(entityPath: string, data: any): Observable<any> {
    return this.http.post(entityPath, data);
  }
}
