import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherRegistrationComponent } from './mother-registration.component';

describe('MotherRegistrationComponent', () => {
  let component: MotherRegistrationComponent;
  let fixture: ComponentFixture<MotherRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotherRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
