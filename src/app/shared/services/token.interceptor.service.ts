import { AuthService } from '@pages/auth/services/auth.service';

export class TokenInterceptorService {
  constructor(private authService: AuthService) {}

  getHeaders() {
    let token = this.authService.getToken();
    const headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return headers
  }
}
