import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-view-parent',
  templateUrl: './view-parent.component.html',
  styleUrls: ['./view-parent.component.css']
})
export class ViewParentComponent implements OnInit, AfterViewInit {

  @ViewChild(ViewChildComponent) child : ViewChildComponent;

  message : string

  constructor(private cd : ChangeDetectorRef) { }

  ngAfterViewInit(): void {
   this.message=this.child.childData;
   this.cd.detectChanges();
  }

  ngOnInit(): void {
  }

}
