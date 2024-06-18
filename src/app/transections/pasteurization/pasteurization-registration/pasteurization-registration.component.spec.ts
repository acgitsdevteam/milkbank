import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteurizationRegistrationComponent } from './pasteurization-registration.component';

describe('PasteurizationRegistrationComponent', () => {
  let component: PasteurizationRegistrationComponent;
  let fixture: ComponentFixture<PasteurizationRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteurizationRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasteurizationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
