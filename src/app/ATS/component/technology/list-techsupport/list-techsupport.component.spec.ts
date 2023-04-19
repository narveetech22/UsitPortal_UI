import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTechsupportComponent } from './list-techsupport.component';

describe('ListTechsupportComponent', () => {
  let component: ListTechsupportComponent;
  let fixture: ComponentFixture<ListTechsupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTechsupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTechsupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
