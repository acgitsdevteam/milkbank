import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MothersRegistrationComponent } from './mothers-registration.component';

describe('MothersRegistrationComponent', () => {
  let component: MothersRegistrationComponent;
  let fixture: ComponentFixture<MothersRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MothersRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MothersRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
