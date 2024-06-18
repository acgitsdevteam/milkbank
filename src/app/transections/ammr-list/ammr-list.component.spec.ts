import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmmrListComponent } from './ammr-list.component';

describe('AmmrListComponent', () => {
  let component: AmmrListComponent;
  let fixture: ComponentFixture<AmmrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmmrListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmmrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
