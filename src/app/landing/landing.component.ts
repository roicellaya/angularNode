import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userForm: FormGroup;

  constructor(private router: Router, private userData: UserDataService) { }

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
    // Save user data
    this.userData.saveUser(this.userForm.value);

    // Navigate to renta
    this.router.navigate(['renta']);
  }

}
