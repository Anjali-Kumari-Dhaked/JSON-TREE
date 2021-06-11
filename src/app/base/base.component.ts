import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentLoaderService } from '../component-loader.service';
import { ContextService } from '../context.service';
import { MetadataService } from '../metadata.service';
import { Url } from '../config/url';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container:any= ViewContainerRef;
  constructor(private metadataService: MetadataService,
    private componentLoaderService: ComponentLoaderService,
    private contextService: ContextService, private _changeDetectionRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.metadataService.getLocal(Url.login).subscribe((data:any) => {
      this.componentLoaderService.parseData(data, this.container);
    //   this.contextService.addToContext('baseContainerRef', this.container);
    // }, (error:any) => {
    //   console.log(error);
    // });

    // // Subscribe here, this will automatically update
    // this.contextService.isDataRefreshed.subscribe(value => {
    //   if (value) {
    //     this._changeDetectionRef.detectChanges();
    //   }
    });
  }}
