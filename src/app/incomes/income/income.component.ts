import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../../user-data.service';
import { Subscription } from 'rxjs/internal/Subscription';

interface User {
  rut: string,
  cellphone: string,
  email: string
}

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})

export class IncomeComponent implements OnInit, OnDestroy {
  incomeForm: FormGroup;
  private userDataRef: Subscription;
  private user: User;

  constructor(private userData: UserDataService) { }

  ngOnInit() {
    this.initForm();
    this.userDataRef = this.userData.userData$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userDataRef.unsubscribe();
  }

  private initForm() {
    this.incomeForm = new FormGroup({
      'income': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    // Send data to node service
    console.log(this.incomeForm.value);
    console.log(this.user);
  }

}
