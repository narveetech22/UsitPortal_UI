import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTechspportComponent } from './register-techspport.component';

describe('RegisterTechspportComponent', () => {
  let component: RegisterTechspportComponent;
  let fixture: ComponentFixture<RegisterTechspportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTechspportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTechspportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
