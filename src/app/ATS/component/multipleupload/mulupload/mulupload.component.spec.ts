import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuluploadComponent } from './mulupload.component';

describe('MuluploadComponent', () => {
  let component: MuluploadComponent;
  let fixture: ComponentFixture<MuluploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuluploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuluploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
