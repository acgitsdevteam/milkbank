import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoClaveRegisterComponent } from './auto-clave-register.component';

describe('AutoClaveRegisterComponent', () => {
  let component: AutoClaveRegisterComponent;
  let fixture: ComponentFixture<AutoClaveRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoClaveRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoClaveRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
