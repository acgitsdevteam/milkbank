import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmrRegisterComponent } from './ammr-register.component';

describe('AmmrRegisterComponent', () => {
  let component: AmmrRegisterComponent;
  let fixture: ComponentFixture<AmmrRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmrRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmmrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
