import { SERVER_API } from './../../../shared/config/config';
import { AuthService } from '@pages/auth/services/auth.service';
import { TokenInterceptorService } from './../../../shared/services/token.interceptor.service';
export class GetSubscriber{
    
    getSubscribers= async(id:number)=> {
        const t = new TokenInterceptorService(new AuthService);
        try {
          const res = await fetch(`${SERVER_API}/countries/${id}`, {
            method: 'GET',
            headers: t.getHeaders()
          });
          if (res.status === 200) {
            return res.json();
          }
          return null
        } catch (error) {
          console.log(error);
        }
      }
}