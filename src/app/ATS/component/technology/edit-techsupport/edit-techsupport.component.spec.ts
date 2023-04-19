import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTechsupportComponent } from './edit-techsupport.component';

describe('EditTechsupportComponent', () => {
  let component: EditTechsupportComponent;
  let fixture: ComponentFixture<EditTechsupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTechsupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTechsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
