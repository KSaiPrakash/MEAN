import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class RegistrationService {

  subs = new Subscription();

  constructor(private http: HttpClient ) {}

  postProfile(profile): Observable<any> {
       return this.http.post(`https://restcountries.eu/rest/v2/region/asia`, profile)
  }
}