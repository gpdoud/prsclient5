import { Requestline } from "../reql/requestline.class";
import { User } from "../user/user.class";

export class Request {
    id: number = 0;
    description: string = '';
    justification: string = '';
    rejectionReason: string = null;
    deliveryMode: string = 'Pickup';
    status: string = 'NEW';
    total: number = 0;
    requestlines: Requestline[] = null;
    userId: number = 0;
    user: User = null;
    
}
