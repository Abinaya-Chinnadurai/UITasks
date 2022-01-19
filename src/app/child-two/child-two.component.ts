import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {


  @Output() msgfrmSibTwo = new EventEmitter();

  @Input() frmSibling : string
  @Input() frmParent : string

  msgSibTwo:string

  constructor() { }

  ngOnInit(): void {
  }

  toSiblingOne(){
    this.msgfrmSibTwo.emit(this.msgSibTwo);
  }

}
