import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../../services/user-data.service';
import { ApiService } from '../../services/api.service';
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

  constructor(private userData: UserDataService, private api: ApiService) { }

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
    console.log(Object.assign(this.incomeForm.value, this.user));
    this.api.sendUser(Object.assign(this.incomeForm.value, this.user))
      .subscribe(this.sendUserSuccess, this.sendUserError);
  }

  private sendUserSuccess(response: any) {
    console.log(response);
  }

  private sendUserError(error: Response) {
    console.log(error);
  }

}
