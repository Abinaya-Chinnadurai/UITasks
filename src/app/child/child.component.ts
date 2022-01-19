import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data: string;

  @Input() msgFrmSiblingTwo : string

  @Output() childMsg = new EventEmitter();

  @Output() msgToSib = new EventEmitter();

  childMessage:string
  msgSib : string

  constructor() { }

  ngOnInit(): void {
  }

  toParent(){
    this.childMsg.emit(this.childMessage)
  }

  toSibling(){
    this.msgToSib.emit(this.msgSib)
  }

}
