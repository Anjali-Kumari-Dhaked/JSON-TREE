import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private contextSubject:any;
  private screenSubject: any;
  private screenObj:any;
  public isDataRefreshed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }
   /// Adds data to respective key in the context
   addToContext(key:any, data:any) {
    let screenName = this.contextSubject.getValue().get("currentWC");
    if (screenName) {
      let screenObj = this.contextSubject.getValue().get(screenName);
      if(screenObj!==undefined){
        screenObj = screenObj.set(key, data)
      }else{
        screenObj = new Map();
        screenObj = screenObj.set(key, data)
      }
      this.contextSubject.next(this.contextSubject.getValue().set(screenName, screenObj));
    } else {
      this.contextSubject.next(this.contextSubject.getValue().set(key, data));
    }
  }
}
