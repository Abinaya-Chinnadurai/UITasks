import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildMethodParentComponent } from './view-child-method-parent.component';

describe('ViewChildMethodParentComponent', () => {
  let component: ViewChildMethodParentComponent;
  let fixture: ComponentFixture<ViewChildMethodParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildMethodParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildMethodParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
