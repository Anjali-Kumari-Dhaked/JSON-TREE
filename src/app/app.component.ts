import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {Component, ViewChild,ViewContainerRef,
  ComponentFactoryResolver,ComponentRef,ComponentFactory
} from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Dynamic3Component } from './dynamic3/dynamic3.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';
interface FriendNode {
  name: string;
  Children?: FriendNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FriendNode[] = [
  {
    name: 'Amar',
    Children: [
      {name: 'Harshit'},
      {name: 'Chhail'},
      {name: 'Abhishek'},
    ]
  }, {
    name: 'Rohit',
    Children: [
      {
        name: 'Richa',
        Children: [
          {name: 'Shivam'},
          {name: 'Vijay'},
        ]
      }, {
        name: 'Vikrant',
        Children: [
          {name: 'Shashi'},
          {name: 'Alok'},
        ]
      },
    ]
  },
];



// When json have only one value
//const TREE_DATA: FriendNode[]= [{"name": "Vegetables"}]


/**
 * @title 
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
say:any;
 private _transformer = (node: FriendNode, level: number) => {
    return {
      expandable: !!node.Children && node.Children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.Children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor( ) {
    //for nested json
   this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  ngOnInit(): void {
    //  this.say=DynamicComponent;


    console.log(TREE_DATA);
    
    // when json have not data
    // this.case1(TREE_DATA);

    // when json is not valid
    // let valid = this.case2(TREE_DATA);
    // console.log(valid);


    //if json have single value in object
   // this.dataSource.data=this.case3(TREE_DATA);

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




  //when json have not data
  case1(json:any){
   if(json){
     console.log(json);
  }
   else{
    console.log("no data in json");
    
  }

  //when json is not valid
  // case2(value:any){
  //  if( value instanceof Array|| value instanceof Object){
  //       console.log("json is valid");
  //  } 
  //  else{
  //    console.log("json is not valid");
  //  }
  // }

  //when json have single value in object
  // case3(value:any){
  //     return value;
  // }
}}










