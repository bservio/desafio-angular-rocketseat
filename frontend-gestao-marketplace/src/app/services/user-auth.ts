import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  getUserToken() {
    // TODO: Recuperar token do localStorage
    return 'token';
  }
}
