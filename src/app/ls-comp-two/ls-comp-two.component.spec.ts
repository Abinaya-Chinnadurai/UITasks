import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsCompTwoComponent } from './ls-comp-two.component';

describe('LsCompTwoComponent', () => {
  let component: LsCompTwoComponent;
  let fixture: ComponentFixture<LsCompTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsCompTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsCompTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
