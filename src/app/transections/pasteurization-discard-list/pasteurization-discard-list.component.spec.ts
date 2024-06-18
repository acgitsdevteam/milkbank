import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasteurizationDiscardListComponent } from './pasteurization-discard-list.component';

describe('PasteurizationDiscardListComponent', () => {
  let component: PasteurizationDiscardListComponent;
  let fixture: ComponentFixture<PasteurizationDiscardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasteurizationDiscardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasteurizationDiscardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
