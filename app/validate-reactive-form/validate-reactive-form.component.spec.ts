import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateReactiveFormComponent } from './validate-reactive-form.component';
import{ ReactiveFormsModule} from '@angular/forms';
describe('ValidateReactiveFormComponent', () => {
  let component: ValidateReactiveFormComponent;
  let fixture: ComponentFixture<ValidateReactiveFormComponent>;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports :[ReactiveFormsModule],
      declarations: [ ValidateReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    
    fixture = TestBed.createComponent(ValidateReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
    it('email validation', () => {
      const form = component.myForm;
      form.controls.email.setValue('anjali.kumari@walkingtree.tech')
      expect(component.emailValidator(form.controls.email)).toBe(null);
    });

    it('password validation', () => {
      const form = component.myForm;
      form.controls.password.setValue('123456')
      expect(form.controls.password.errors).toBe(null);
    });
    
  
});
