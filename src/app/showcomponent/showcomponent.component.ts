import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
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
  // @Input() dynamic1:any=[];
  json:any=[];
  json1:any=[];
  //tab:any=this.json[0].components[0].component;
 
  
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef }) 
  
 
  entry:any= ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, private httpClient: HttpClient, private cdRef: ChangeDetectorRef) { 
    this.httpClient.get("assets/component.json").subscribe(data =>{
      console.log(data);
      this.json = data;
 console.log(this.json[0].components[0].component);
// console.log(this.dynamic1);
   })}

   ngOnInit(): void {
    //  this.say=DynamicComponent;
  }


  createComponent(process: number) {
    console.log(process);
    this.entry.clear();
    if (process==1) {
    //   let factory = this.resolver.resolveComponentFactory(Component1Component);
    // this.componentRef= this.entry.createComponent(factory)
    // // to access the created instance use
    // // this.compRef.instance.someProperty = 'someValue';
    // // this.compRef.instance.someOutput.subscribe(val => doSomething());
    // this.cdRef.detectChanges();
    this.component1();
      // this.component2();
      // this.component3();
      // this.component4();
      // this.component5();
      
    } 
    else if (process ==2) {
      this.component2();
      // this.component2();
      // this.component3();
      // this.component4();
      
    }
  
    else if (process == 3) {
      this.component3();
      // this.component2();
      // this.component3();
    }
    else if (process == 4) {
      this.component4();
      // this.component2();
    } 
    else if (process == 5) {
      this.component5();
    }
  this.componentRef.instance.message = "Called by mainComponent";
  //this.destroyComponent();
  }
  destroyComponent() {
    this.componentRef.destroy();
  }


  selectComponent(id : number) {
    this.createComponent(id+1 );
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

in(i:number){
this.json1=[];
console.log(this.json,i);
this.json.forEach((element:any) => {
  if(element.process==i){
    console.log(element.process);
    this.json1=this.json[i-1].components;
    console.log(this.json1);
  }
});
}}
