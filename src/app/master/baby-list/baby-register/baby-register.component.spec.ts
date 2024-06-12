import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyRegisterComponent } from './baby-register.component';

describe('BabyRegisterComponent', () => {
  let component: BabyRegisterComponent;
  let fixture: ComponentFixture<BabyRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
