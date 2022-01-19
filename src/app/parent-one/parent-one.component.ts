import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {

  formOne = this.fb.group({
    name:[''],age:[''],place:['']
  })

  parentData:any=[]

  constructor(private fb : FormBuilder) {   }

  ngOnInit(): void {    
  }

  public send(){
    this.parentData=this.formOne.value  
    this.formOne.reset()
  }

}
