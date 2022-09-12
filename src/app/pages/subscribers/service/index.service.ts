import { UpdateSubscriber } from './updateSubscribe.service';
import { GetSubscriber } from './getSubscriber.service';
import { GetAllSubscribers } from './getAllSubscribers.service';
import { DeleteSubscriber } from './deleteSubscriber.service';
import { AddSubscriberService } from './addSubcriber.service';

export class SubscriberServices {
      addSubscriber=AddSubscriberService;
      deleteSubscriber=DeleteSubscriber;
      getAllSubscribers= new GetAllSubscribers();
      getSubscriber=GetSubscriber;
      updateSubscriber=UpdateSubscriber;
}
