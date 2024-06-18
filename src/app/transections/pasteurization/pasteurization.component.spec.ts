import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteurizationComponent } from './pasteurization.component';

describe('PasteurizationComponent', () => {
  let component: PasteurizationComponent;
  let fixture: ComponentFixture<PasteurizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteurizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasteurizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
