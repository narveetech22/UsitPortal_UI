import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVmsComponent } from './list-vms.component';

describe('ListVmsComponent', () => {
  let component: ListVmsComponent;
  let fixture: ComponentFixture<ListVmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
