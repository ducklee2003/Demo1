import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Courses } from '../../models/auth.model';
import { courses } from '../../../data';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  // getAll(): Observable<Courses[]> {
  //   return this.http.get<Courses[]>(baseUrl);
  // }
  getAll() {
    return courses;
  }

  get(id: any): Observable<Courses> {
    return this.http.get<Courses>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Courses[]> {
    return this.http.get<Courses[]>(`${baseUrl}?title=${title}`);
  }
}
