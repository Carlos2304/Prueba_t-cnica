import { store } from './../../../shared/config/Storage/index';
import { SERVER_API, Store } from '../../../shared/config/config';
import { Subscriber } from './../model/subscriber';
import { TokenInterceptorService } from 'app/shared/services/token.interceptor.service';
import { AuthService } from '@pages/auth/services/auth.service';

export class GetAllSubscribers {
    
  //Fail to Authorization header
   getAllSubscribers= async()=> {
    const t = new TokenInterceptorService(new AuthService);
    try {
      const res = await fetch(`${SERVER_API}/countries/`, {
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
  GetAllSubscribersLocal(){
    return store.getters.getDataLocal();
  }
}
