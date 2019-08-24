import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  incomeForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.incomeForm = new FormGroup({
      'income': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    // Send data to node service
    console.log(this.incomeForm.value);
  }

}
