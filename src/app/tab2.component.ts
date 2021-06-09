import {Component, Input, OnInit} from '@angular/core'

import { DclWrapper } from './dcl-wrapper.component'
// Use dcl-wrapper component
@Component({
  selector: 'my-tabs',
  template: `
  
  <div *ngFor="let tab of tabs">
    <dcl-wrapper [type]="tab"></dcl-wrapper>
  </div>
`
})
export class Tabs {
  @Input() tabs:any;
}