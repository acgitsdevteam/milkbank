import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteurizationDiscardRegisterComponent } from './pasteurization-discard-register.component';

describe('PasteurizationDiscardRegisterComponent', () => {
  let component: PasteurizationDiscardRegisterComponent;
  let fixture: ComponentFixture<PasteurizationDiscardRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteurizationDiscardRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasteurizationDiscardRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
