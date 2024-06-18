import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoClaveListComponent } from './auto-clave-list.component';

describe('AutoClaveListComponent', () => {
  let component: AutoClaveListComponent;
  let fixture: ComponentFixture<AutoClaveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoClaveListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoClaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
