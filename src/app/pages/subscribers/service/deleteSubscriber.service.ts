import { SERVER_API } from './../../../shared/config/config';
import { AuthService } from '@pages/auth/services/auth.service';
import { TokenInterceptorService } from './../../../shared/services/token.interceptor.service';
export class DeleteSubscriber{

    async deleteSubscribe(id: number){
        try {
            const res = await fetch(`${SERVER_API}/subscribers/${id}`,{
                method: 'PUT',
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