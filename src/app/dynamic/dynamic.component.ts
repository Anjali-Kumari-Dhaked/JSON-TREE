import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  message ="hI" ;
  constructor() { }
   
  ngOnInit(): void {
    alert(this.message);
  }

}


