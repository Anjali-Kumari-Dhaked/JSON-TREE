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
  json1:any=[];
  json2:any=[];
  json3:any=[];
  json4:any=[];
  json5:any=[];
    i:any;
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef })
  entry:any= ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, private httpClient: HttpClient) {
    this.httpClient.get("assets/component.json").subscribe(data =>{
      console.log(data);
      this.json = data;
      for ( this.i=0; this.i<= this.json.length-2; this.i++) {
        this.json1.push(this.json[this.i]);
        }
      for ( this.i=0; this.i<= this.json1.length-2; this.i++) {
          this.json2.push(this.json1[this.i]);
      }
      for ( this.i=0; this.i<= this.json2.length-2; this.i++) {
        this.json3.push(this.json2[this.i]);
    }
    for ( this.i=0; this.i<= this.json3.length-2; this.i++) {
      this.json4.push(this.json3[this.i]);
  }

      
   })}

   ngOnInit(): void {
    //  this.say=DynamicComponent;
  }

  createComponent(process: string) {
    this.entry.clear();
    if (process=='1') {
      this.component1();
      this.component2();
      this.component3();
      this.component4();
      this.component5();
      
    } 
    else if (process =='2') {
      this.component1();
      this.component2();
      this.component3();
      this.component4();
      
    }
  
    else if (process == '3') {
      this.component1();
      this.component2();
      this.component3();
    }
    else if (process == '4') {
      this.component1();
      this.component2();
    } 
    else if (process == '5') {
      this.component1();
    }
  


    this.componentRef.instance.message = "Called by mainComponent";
  }
  destroyComponent() {
    this.componentRef.destroy();
  }


  selectComponent(id : string) {
    this.createComponent(id);
  }

component1(){
  const factory = this.resolver.resolveComponentFactory(Component1Component);
  this.componentRef = this.entry.createComponent(factory);
}
component2(){
  const factory = this.resolver.resolveComponentFactory(Component2Component);
  this.componentRef = this.entry.createComponent(factory);
}
component3(){
  const factory = this.resolver.resolveComponentFactory(Component3Component);
  this.componentRef = this.entry.createComponent(factory);
}
component4(){
  const factory = this.resolver.resolveComponentFactory(Component4Component);
  this.componentRef = this.entry.createComponent(factory);
}
component5(){
  const factory = this.resolver.resolveComponentFactory(Component5Component);
  this.componentRef = this.entry.createComponent(factory);
}
}
