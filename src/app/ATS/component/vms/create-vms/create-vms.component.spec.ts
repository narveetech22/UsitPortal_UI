import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVmsComponent } from './create-vms.component';

describe('CreateVmsComponent', () => {
  let component: CreateVmsComponent;
  let fixture: ComponentFixture<CreateVmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateVmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
