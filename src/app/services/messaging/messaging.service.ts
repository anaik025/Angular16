import { Injectable } from '@angular/core';
import {  Subject,Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

private subject = new Subject<any>();

sendMessage(data:any){
  this.subject.next({message:data});
}

onMessage():Observable<any> {
  return this.subject.asObservable();
}
  
}
