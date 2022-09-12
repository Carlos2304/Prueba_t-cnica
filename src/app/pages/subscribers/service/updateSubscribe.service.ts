import { SERVER_API } from './../../../shared/config/config';
import { TokenInterceptorService } from './../../../shared/services/token.interceptor.service';
import { AuthService } from './../../auth/services/auth.service';
export class UpdateSubscriber{
    updateSubscribers= async(id: number, newDate:{})=> {
        try {
          const res = await fetch(`${SERVER_API}/countries/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newDate)
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