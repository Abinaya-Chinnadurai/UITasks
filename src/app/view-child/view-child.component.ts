import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  childData : string = "Data from Child";

  viewChildForm = this.fb.group({name:['']})

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  sendData(){
    this.childData = this.viewChildForm.get('name')?.value
  }

}
