import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ls-comp-two',
  templateUrl: './ls-comp-two.component.html',
  styleUrls: ['./ls-comp-two.component.css']
})
export class LsCompTwoComponent implements OnInit {

  data : any 
  constructor() { 
    this.data = localStorage.getItem("lsFormData");
  }

  ngOnInit(): void {
  }

}
