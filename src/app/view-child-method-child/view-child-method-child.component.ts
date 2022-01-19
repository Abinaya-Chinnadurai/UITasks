import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-method-child',
  templateUrl: './view-child-method-child.component.html',
  styleUrls: ['./view-child-method-child.component.css']
})
export class ViewChildMethodChildComponent implements OnInit {

  childData:any
  fromChild:any=[]

  constructor() { }

  ngOnInit(): void {
  }

  toParent(){
    this.fromChild.push(this.childData);
  }
}
