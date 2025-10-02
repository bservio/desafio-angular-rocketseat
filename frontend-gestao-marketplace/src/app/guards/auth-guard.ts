import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { UserService } from '../services/user';
import { UserAuthService } from '../services/user-auth';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateChildFn = async (route, state) => {
  const _userService = inject(UserService);
  const _userAuthService = inject(UserAuthService);
  const _router = inject(Router);

  //Nao possui token no localstorage
  const HAS_TOKEN = _userAuthService.getUserToken();

  if (!HAS_TOKEN) {
    return _router.navigate(['/login']);
  }

  try {
    await firstValueFrom(_userService.validateUser());

    if (state.url === '/login') {
      return _router.navigate(['/products']);
    }

    return true;
  } catch (error) {
    return _router.navigate(['/login']);
  }
};
