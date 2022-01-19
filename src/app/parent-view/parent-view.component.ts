import { Component, Directive, OnInit, ViewChild } from '@angular/core';

@Directive({selector: 'app-child-view'})
class ChildDirective {
}

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrls: ['./parent-view.component.css']
})
export class ParentViewComponent implements OnInit {


  @ViewChild(ChildDirective) child!: ChildDirective;

  ngAfterViewInit() {
  
  }

  constructor() { }

  ngOnInit(): void {
  }

}
