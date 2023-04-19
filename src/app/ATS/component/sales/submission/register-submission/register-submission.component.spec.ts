import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSubmissionComponent } from './register-submission.component';

describe('RegisterSubmissionComponent', () => {
  let component: RegisterSubmissionComponent;
  let fixture: ComponentFixture<RegisterSubmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSubmissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
