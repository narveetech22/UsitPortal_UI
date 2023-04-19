import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInterviewComponent } from './register-interview.component';

describe('RegisterInterviewComponent', () => {
  let component: RegisterInterviewComponent;
  let fixture: ComponentFixture<RegisterInterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterInterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
