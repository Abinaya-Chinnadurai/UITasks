import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ls-comp-one',
  templateUrl: './ls-comp-one.component.html',
  styleUrls: ['./ls-comp-one.component.css']
})
export class LsCompOneComponent implements OnInit {

  lsForm = this.formbuilder.group({data:['']})
  str : string

  constructor(private formbuilder:FormBuilder) {    
      
   }

  ngOnInit(): void {
  }

  send(){
    localStorage.setItem("lsFormData",this.lsForm.get('data')?.value); 
    this.lsForm.reset()
  }

}

