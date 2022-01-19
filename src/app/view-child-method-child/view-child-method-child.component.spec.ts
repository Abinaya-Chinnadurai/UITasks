import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildMethodChildComponent } from './view-child-method-child.component';

describe('ViewChildMethodChildComponent', () => {
  let component: ViewChildMethodChildComponent;
  let fixture: ComponentFixture<ViewChildMethodChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildMethodChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildMethodChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
