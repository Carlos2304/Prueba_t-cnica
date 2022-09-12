import { TokenInterceptorService } from './../../../shared/services/token.interceptor.service';
import { SERVER_API } from './../../../shared/config/config';
import { Subscriber } from './../model/subscriber';
import { AuthService } from '@pages/auth/services/auth.service';


export class AddSubscriberService {

    async createSubscriber(subscriber: Subscriber){
        const t = new TokenInterceptorService(new AuthService);
        try {
            const res = await fetch(`${SERVER_API}/subscribers/`,{
                method: 'POST',
                headers: t.getHeaders(),
                body: JSON.stringify(subscriber)
            })
            if(res.status ===200){
                console.log(res.json());
                return res.json();
            }
            return null;   
        } catch (error) {
            console.log(error);        
        }
    }
}