import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IAuthSucessResponse } from '../interfaces/auth-sucess-response';
import { Observable } from 'rxjs';
import { ILoginSucessResponse } from '../interfaces/login-sucess-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _httpClient = inject(HttpClient);

  validateUser(): Observable<IAuthSucessResponse> {
    return this._httpClient.get<IAuthSucessResponse>('http://localhost:3000/api/protected');
  }

  login(email: string, password: string): Observable<ILoginSucessResponse> {
    const body = {
      email,
      password,
    };
    return this._httpClient.post<ILoginSucessResponse>(
      'http://localhost:3000/api/users/login',
      body
    );
  }
}
