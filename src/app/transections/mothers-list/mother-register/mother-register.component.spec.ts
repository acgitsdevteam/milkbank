import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherRegisterComponent } from './mother-register.component';

describe('MotherRegisterComponent', () => {
  let component: MotherRegisterComponent;
  let fixture: ComponentFixture<MotherRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotherRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
