import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsArrOneComponent } from './ls-arr-one.component';

describe('LsArrOneComponent', () => {
  let component: LsArrOneComponent;
  let fixture: ComponentFixture<LsArrOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsArrOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsArrOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
