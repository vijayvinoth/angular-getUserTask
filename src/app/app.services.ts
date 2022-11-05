import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AppService {
   URL = 'https://reqres.in/api/users/';
  constructor(private readonly http: HttpClient) { }

  public getUser(Id) {
        return this.http.get(this.URL,Id);
  }

}