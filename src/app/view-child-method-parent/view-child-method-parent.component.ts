import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewChildMethodChildComponent } from '../view-child-method-child/view-child-method-child.component';

@Component({
  selector: 'app-view-child-method-parent',
  templateUrl: './view-child-method-parent.component.html',
  styleUrls: ['./view-child-method-parent.component.css']
})
export class ViewChildMethodParentComponent implements OnInit, AfterViewInit {

  @ViewChild(ViewChildMethodChildComponent)child : ViewChildMethodChildComponent

  msgFromChild:any=[]

  constructor() { }

  ngAfterViewInit(): void {
    this.msgFromChild = this.child.fromChild
  }

  ngOnInit(): void {
  }

}
