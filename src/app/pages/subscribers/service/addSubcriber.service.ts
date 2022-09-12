import { Injectable } from '@angular/core';
import { SERVER_API } from './../../../shared/config/config';
import { Subscriber } from './../model/subscriber';

@Injectable({
    providedIn: 'root'
  })
export class AddSubscriberService {

    async createSubscriber(subscriber: Subscriber){
        try {
            const res = await fetch(`${SERVER_API}/subscribers/`,{
                method: 'POST',
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