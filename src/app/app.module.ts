import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidateReactiveFormComponent } from './validate-reactive-form/validate-reactive-form.component';
import { NgxContextModule } from 'ngx-context';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTreeModule} from '@angular/material/tree';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { DataFromJsonComponent } from './data-from-json/data-from-json.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicComponent } from './dynamic/dynamic.component';
import { Dynamic2Component } from './dynamic2/dynamic2.component';
import { Dynamic3Component } from './dynamic3/dynamic3.component';
import { MainDynamicComponent } from './main-dynamic/main-dynamic.component';
import { JsontreeComponent } from './jsontree/jsontree.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ProgressComponent } from './progress/progress.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ShowcomponentComponent } from './showcomponent/showcomponent.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Component5Component } from './component5/component5.component';
import {MatTabsModule} from '@angular/material/tabs';
import { C1, C2, C3, C4, C5 } from './c1-c3.component';
import { Tabs } from './tabs.component';
import { DclWrapper } from './dcl-wrapper.component';
import { FormPanelComponent } from './form-panel/form-panel.component';
import { LoginComponent } from './login/login.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { PasswordComponent } from './password/password.component';
import { ButtonComponent } from './button/button.component';
import { ImageComponent } from './image/image.component';
import { BaseComponent } from './base/base.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
// import { Tab2 } from './tab2.component';
import {MatIconModule} from '@angular/material/icon';
import { PasswordFieldComponent } from './password-field/password-field.component';
import {MatRippleModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { TitleComponent } from './title/title.component';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    ValidateReactiveFormComponent,
    StepperComponent,
    DataFromJsonComponent,
    DynamicComponent,
    Dynamic2Component,
    Dynamic3Component,
    MainDynamicComponent,
    JsontreeComponent,
    ProgressComponent,
    SlideToggleComponent,
    ShowcomponentComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Component5Component,
    C1,C2,C3,C4 ,C5,
    Tabs,
     DclWrapper,
     FormPanelComponent,
     LoginComponent,
     TextFieldComponent,
     PasswordComponent,
     ButtonComponent,
     ImageComponent,
     BaseComponent,
     PasswordFieldComponent,
     TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxContextModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTreeModule,
    MatStepperModule,
    HttpClientModule,
    MatDatepickerModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatCardModule,
    MatTooltipModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[DynamicComponent, Dynamic2Component, Component1Component, Component2Component, Component3Component,Component4Component, Component5Component, C1, C2, C3,C4,C5,ValidateReactiveFormComponent
  ]})
export class AppModule { }
