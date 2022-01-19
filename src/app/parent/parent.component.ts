import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentForm = this.formbuilder.group({data:['']})

  message:any = ' "I am sent by Parent" '

  send(){
     this.message = this.parentForm.value;
     this.parentForm.reset()
  }

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }

}
