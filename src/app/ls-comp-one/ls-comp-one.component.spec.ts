import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsCompOneComponent } from './ls-comp-one.component';

describe('LsCompOneComponent', () => {
  let component: LsCompOneComponent;
  let fixture: ComponentFixture<LsCompOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsCompOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsCompOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
