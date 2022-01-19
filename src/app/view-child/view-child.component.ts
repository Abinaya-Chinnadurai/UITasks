import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  childData : any=[];

  viewChildForm = this.fb.group({
    name:[''],age:[''],place:['']
  })

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  public sendData(){
    //this.childData = this.viewChildForm.value
    this.childData.push(this.viewChildForm.value)
    this.viewChildForm.reset()
  }

}
