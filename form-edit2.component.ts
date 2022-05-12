import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-edit2',
  templateUrl: './form-edit2.component.html',
  styleUrls: ['./form-edit2.component.css']
})
export class FormEdit2Component implements OnInit {

  activeForm: FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /*this.activeForm=this.formBuilder.group({
      firstName:['', Validators.required]
    })*/
  }

  mod:any={};
  onSubmit(){
    this.submitted=true;
    console.log(this.mod);
    this.mod={};
    window.alert("Success");
    this.submitted=false;
    
    
  }
}
