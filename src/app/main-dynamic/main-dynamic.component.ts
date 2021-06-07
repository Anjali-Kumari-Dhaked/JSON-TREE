import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { Dynamic2Component } from '../dynamic2/dynamic2.component';
import { Dynamic3Component } from '../dynamic3/dynamic3.component';

@Component({
  selector: 'app-main-dynamic',
  templateUrl: './main-dynamic.component.html',
  styleUrls: ['./main-dynamic.component.css']
})
export class MainDynamicComponent implements OnInit {
  title = 'app';
  say:any;
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef })
   entry:any= ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }
  createComponent(Id: number) {
    this.entry.clear();
    if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(DynamicComponent);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(Dynamic2Component);
      this.componentRef = this.entry.createComponent(factory);
    } 
    this.componentRef.instance.message = "Called by mainComponent";
  }
  destroyComponent() {
    this.componentRef.destroy();
  }
  object = [
    {
      "Id": 1,
      "Name": "Student Info"
    },
    {
      "Id": 2,
      "Name": "Parent Info"
    }
  ]
  selectName(id : number) {
    this.createComponent(id);
  }
  
 
  ngOnInit(): void {
    //  this.say=DynamicComponent;
  }
  sayHi(){
    this.say= DynamicComponent;
  }
  sayHello(){
    this.say = Dynamic3Component;
  }
  sayBye(){
    this.say= Dynamic2Component;
  }


}
