import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabyListComponent } from './baby-list.component';

describe('BabyListComponent', () => {
  let component: BabyListComponent;
  let fixture: ComponentFixture<BabyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
