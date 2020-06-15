import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { UserModel } from '../model/user.model';
import { ResponseModel } from '../model/response.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
  ) { }

  login(userModel: UserModel): Observable<ResponseModel> {
    const url = 'http://localhost:3000/api/v1/user/lgin';
    return this.http.post<ResponseModel>(url, userModel);
  }


}
