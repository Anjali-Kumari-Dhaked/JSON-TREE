import { ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { ContextService } from '../context.service';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() title: string;
  @Input() css: string;
  @Input() titleValue: any;
  @Input() visibility: boolean;
  @Input() hidden: boolean;
  @Input() titleClass: string;
  @Input() isShown: boolean;
  @Input() titleValueClass: string;
  title1: any;


  constructor(private contextService: ContextService,
    private oElementRef: ElementRef,
    private _changeDetectionRef: ChangeDetectorRef, private translate: TranslateService,
  ) {
    let language = localStorage.getItem('language');
   // translate.setDefaultLang(language);
    //translate.use(language)
  }

  ngOnInit(): void {
    // const list = this.titleValue.reverse();
    this.visibility = this.visibility !== undefined ? this.visibility : true;
    this.isShown = this.isShown !== undefined ? this.isShown : true;
    if (this.titleValue !== undefined) {
      if (this.titleValue.startsWith('#')) {
      //  this.titleValue = this.contextService.getDataByString(this.titleValue)
      }
    }

    if (this.titleClass !== undefined) {
      if (this.titleClass.startsWith('#')) {
      //  this.titleClass = this.contextService.getDataByString(this.titleClass);
      }
    }
  }

}
