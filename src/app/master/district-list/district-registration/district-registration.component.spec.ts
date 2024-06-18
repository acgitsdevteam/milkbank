import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictRegistrationComponent } from './district-registration.component';

describe('DistrictRegistrationComponent', () => {
  let component: DistrictRegistrationComponent;
  let fixture: ComponentFixture<DistrictRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
