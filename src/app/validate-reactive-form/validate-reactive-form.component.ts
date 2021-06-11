import { Component, OnInit } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-validate-reactive-form',
  templateUrl: './validate-reactive-form.component.html',
  styleUrls: ['./validate-reactive-form.component.css']
})
export class ValidateReactiveFormComponent implements OnInit {
  //submitted = false;
  show:any;
  error:any;
  retrievedObject:any;
  retrievedObject1:any;
  myForm:any= FormGroup;
constructor(private fb: FormBuilder ){
this.show=false;
this.error=false;
}
  ngOnInit() {
  
      this.myForm = this.fb.group({
      email:['', [ Validators.required, this.emailValidator]],
      // email:['', [Validators.required],
      password :['',[Validators.required, Validators.minLength(6)] ]
      // password :['',[Validators.required, this.ageValidator]]
    });
  }

  onSubmit(form: FormGroup) {
   
  }
//  console.log(form);
//  console.log(form.valid);
//  console.log(form.get('email')?.dirty);
//  console.log(form.controls.email.errors);
//  console.log(form.controls.password.errors);
  
  // ngOnChanges(){
  //   localStorage.setItem("formdata", JSON.stringify(this.myForm.value))
  // }

  // ageValidator(control:AbstractControl):{[key:string]:boolean} | null {
  //   if(control.value !==null && (isNaN(control.value)|| control.value.length >70)){
  //     return {'ageValidator':true}
  //   }
  // return null ;
  // }

  emailValidator(control:AbstractControl):{[key:string]:boolean} | null {
    if(control.value ===null || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(control.value).toLowerCase())){
    return null ;
       }
      return {invalidEmail:true};
      }


    login(){
      localStorage.setItem("formdata", JSON.stringify(this.myForm.value))
      // this.submitted = true;
      this. retrievedObject = localStorage.getItem('formdata');

       this.retrievedObject=JSON.parse(this.retrievedObject).email;
    console.log(this.retrievedObject);
       this. retrievedObject1 = localStorage.getItem('formdata');

       this.retrievedObject1=JSON.parse(this.retrievedObject1).password;
       console.log(this.retrievedObject, this.retrievedObject1);
      // stop here if form is invalid
      if (this.myForm.invalid) {
          alert("invalid email id and password");
          return;
      }
      if(this.myForm.valid){
        if(this.retrievedObject== "anjali.kumari@walking.tech" &&this.retrievedObject1=="123456"){
         // alert("login successfully");
          // document.querySelector(".show")?.classList.remove("hidden");
          this.error=false;
          this.show= true;
         
        }
          else{
            //alert("wrong details");
            // document.querySelector(".error")?.classList.remove("hidden");
            this.show=false;
            this.error=true;
          }
         
        }
      
        localStorage.clear(); 
     }
   
      // display form values on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myForm.value, null, 4));
      }

