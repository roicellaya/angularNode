import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.userForm = new FormGroup({
      'rut': new FormControl(null, Validators.required),
      'cellphone': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

}
