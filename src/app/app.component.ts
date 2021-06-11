import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { C1, C2, C3, C4, C5 } from './c1-c3.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { ValidateReactiveFormComponent } from './validate-reactive-form/validate-reactive-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json';
  // types=[Component1Component, Component2Component, Component3Component,Component4Component,Component5Component]
  
  //types=[ValidateReactiveFormComponent];
  jsondata:any={};
  types = [C1, C2, C3, C4, C5];
//for login json
//types:any=[];
ty:any;
matchedComponent:any;


//For dYNAMIC loading
constructor(private httpClient: HttpClient) {
   
  this.httpClient.get("assets/component.json").subscribe(data=>{
    this.jsondata = data;
    console.log(this.jsondata);      
  })

}
getComponent(event:any) {
  this.types.length = 0;
  console.log(event.index);
  
  for(let value of this.jsondata) {
    console.log(value);
    if(value.process === event.index+1){
      value.components.map((data:any, index:any)=>{
        if(index === 0) {
          console.log(index);
          this.types.push(C1);
          console.log(this.types);
        }
        if(index === 1) {
          this.types.push(C2);
        }
        if(index === 2) {
          this.types.push(C3);
        }
        if(index === 3) {
          this.types.push(C4);
        }
        if(index === 4) {
          this.types.push(C5);
        }
      })
    }}
   }
  }



// constructor(private http:HttpClient ){
  // this.http.get("assets/component.json").subscribe((data:any) =>{
    //   console.log(data);
    //   this.jsondata = data;
    //   console.log(this.jsondata[0].components[0].component);
    //   if(this.jsondata[0].components[0].component=="Component1"){
    //     this.dynamic1.push(Component1Component);
    //     console.log(this.dynamic1);
    //   }
    //   if(this.jsondata[0].components[1].component=="Component2"){
    //     this.dynamic2.push(Component2Component)
    //   }
    //   if(this.jsondata[0].components[2].component=="Component3"){
    //     this.dynamic3.push(Component3Component)
    //   }
    //   if(this.jsondata[0].components[3].component=="Component4"){
    //     this.dynamic4.push(Component4Component)
    //   }
    //   if(this.jsondata[0].components[4].component=="Component5"){
    //     this.dynamic5.push(Component5Component);
    //   }
      // if (this.jsondata[0]) {
//         this.types.push(FormPanelComponent);
//        }
//  this.types.push(this.matchedComponent);
 
   
  
  


  







