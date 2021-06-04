import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-validate-reactive-form',
  templateUrl: './validate-reactive-form.component.html',
  styleUrls: ['./validate-reactive-form.component.css']
})
export class ValidateReactiveFormComponent implements OnInit {

  myForm:any= FormGroup;
constructor(private fb: FormBuilder ){

}
  ngOnInit() {
    this.myForm = this.fb.group({
      email:['', [this.emailValidator]],
      // email:['', [Validators.required],
      password :['',[Validators.required, Validators.minLength(6)] ]
      // password :['',[Validators.required, this.ageValidator]]
    });
  }

  onSubmit(form: FormGroup) {
 console.log(form);
 console.log(form.valid);
 console.log(form.get('email')?.dirty);
 console.log(form.controls.email.errors);
 console.log(form.controls.password.errors);
  }

  ageValidator(control:AbstractControl):{[key:string]:boolean} | null {
    if(control.value !==null && (isNaN(control.value)|| control.value.length >70)){
      return {'ageValidator':true}
    }
  return null ;
  }

  emailValidator(control:AbstractControl):{[key:string]:boolean} | null {
    if(control.value ===null || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(control.value).toLowerCase())){
    return null ;
       }
      return {invalidEmail:true};
      }
}

