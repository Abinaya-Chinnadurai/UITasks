import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ls-arr-one',
  templateUrl: './ls-arr-one.component.html',
  styleUrls: ['./ls-arr-one.component.css']
})
export class LsArrOneComponent implements OnInit {

  lsFormTwo = this.fb.group({
    name:[''],
    age:[''],
    place:['']
  })

  lsDataArr:any=[]
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  storeData(){
    this.lsDataArr=this.lsFormTwo.value;
    localStorage.setItem("dataArr",JSON.stringify(this.lsDataArr));
  }
}
