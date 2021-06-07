import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
import { Component3Component } from '../component3/component3.component';
import { Component4Component } from '../component4/component4.component';
import { Component5Component } from '../component5/component5.component';

@Component({
  selector: 'app-showcomponent',
  templateUrl: './showcomponent.component.html',
  styleUrls: ['./showcomponent.component.css']
})
export class ShowcomponentComponent implements OnInit {
  json:any=[];
  componentRef: any;
 
  @ViewChild('loadComponent', { read: ViewContainerRef })
   entry:any= ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, private httpClient: HttpClient) {
    this.httpClient.get("assets/component.json").subscribe(data =>{
      console.log(data);
      this.json = data;
   })}

   ngOnInit(): void {
    //  this.say=DynamicComponent;
  }

  createComponent(process: number) {
    this.entry.clear();
    if (process==1 ) {
      const factory = this.resolver.resolveComponentFactory(Component1Component);
      this.componentRef = this.entry.createComponent(factory);
    } else if (process == 2) {
      const factory = this.resolver.resolveComponentFactory(Component2Component);
      this.componentRef = this.entry.createComponent(factory);
    } 
    else if (process == 3) {
      const factory = this.resolver.resolveComponentFactory(Component3Component);
      this.componentRef = this.entry.createComponent(factory);
    }
    else if (process == 4) {
      const factory = this.resolver.resolveComponentFactory(Component4Component);
      this.componentRef = this.entry.createComponent(factory);
    } 
    else if (process == 5) {
      const factory = this.resolver.resolveComponentFactory(Component5Component);
      this.componentRef = this.entry.createComponent(factory);
    }



    this.componentRef.instance.message = "Called by mainComponent";
  }
  destroyComponent() {
    this.componentRef.destroy();
  }


  selectComponent(id : number) {
    this.createComponent(id);
  }
 

  
 
  

}
