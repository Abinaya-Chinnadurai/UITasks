import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsArrTwoComponent } from './ls-arr-two.component';

describe('LsArrTwoComponent', () => {
  let component: LsArrTwoComponent;
  let fixture: ComponentFixture<LsArrTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsArrTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsArrTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
