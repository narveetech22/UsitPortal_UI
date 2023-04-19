import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVmsComponent } from './edit-vms.component';

describe('EditVmsComponent', () => {
  let component: EditVmsComponent;
  let fixture: ComponentFixture<EditVmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
