import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentForm = this.formbuilder.group({data:['']})

  message:any
  msg:string
  msgToChildTwo:any
  msgToSib:string
  msgToSibOne : string

  sendToChildren(){
    this.message = this.parentForm.value;
    this.msgToChildTwo = this.parentForm.value;
    this.parentForm.reset()
  }
  sendToChildOne(){
     this.message = this.parentForm.value;
     this.parentForm.reset()
  }
  sendToChildTwo(){
    this.msgToChildTwo = this.parentForm.value;
    this.parentForm.reset()
 }

  receiveMsgFrmChild($event : any){
   this.msg=$event
  }
  
  msgToSibling($event : any){
     this.msgToSib = $event
  }

  msgToSiblingOne($event : any){
   this.msgToSibOne = $event
  }

  constructor(private formbuilder:FormBuilder) { 
  }

  ngOnInit(): void {
  }

}
