import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { _isTestEnvironment } from '@angular/cdk/platform';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  url: string = environment.apiUrl;

  getPage(): Observable<any>{
    return this.http.get(`${environment.serverUrl}api/hello`);
  }
}
