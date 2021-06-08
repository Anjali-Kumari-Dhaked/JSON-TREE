import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { C1, C2, C3, C4, C5 } from './c1-c3.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'json';
  // types=[Component1Component, Component2Component, Component3Component,Component4Component,Component5Component]
  
  
  types = [C1, C2, C3, C4, C5];
  dataa:any;

  constructor(private httpClient: HttpClient) {
   
    this.httpClient.get("assets/component.json").subscribe(data=>{
      this.dataa = data;
      console.log(this.dataa);      
    })

  }


 
  

  getCmponent(event:any) {
    this.types.length = 0;
    console.log(event.index);
    
    for(let value of this.dataa) {
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
      

      }
      

    }

  }
}









