import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ls-arr-two',
  templateUrl: './ls-arr-two.component.html',
  styleUrls: ['./ls-arr-two.component.css']
})
export class LsArrTwoComponent implements OnInit {

  lsDataArr:any=[]
  constructor() {
 //  this.lsDataArr = JSON.parse(localStorage.getItem('dataArr'));
   console.warn(this.lsDataArr)
   }

  ngOnInit(): void {
  }

}
