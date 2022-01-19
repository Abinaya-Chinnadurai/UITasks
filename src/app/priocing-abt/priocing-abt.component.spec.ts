import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriocingAbtComponent } from './priocing-abt.component';

describe('PriocingAbtComponent', () => {
  let component: PriocingAbtComponent;
  let fixture: ComponentFixture<PriocingAbtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriocingAbtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriocingAbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
