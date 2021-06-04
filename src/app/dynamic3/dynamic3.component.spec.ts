import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dynamic3Component } from './dynamic3.component';

describe('Dynamic3Component', () => {
  let component: Dynamic3Component;
  let fixture: ComponentFixture<Dynamic3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dynamic3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Dynamic3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
