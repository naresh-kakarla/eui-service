import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('access_token');

  if (token) {
    return true;
  } else {
    
    window.alert('You must be logged in to access this page.');
    return false;
  }
};
