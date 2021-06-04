import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxContextModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTreeModule,
    MatStepperModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[DynamicComponent, Dynamic2Component]
})
export class AppModule { }
