import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IncomesRoutingModule } from './incomes-routing.module';
import { IncomeComponent } from './income/income.component';

@NgModule({
  imports: [
    CommonModule,
    IncomesRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [IncomeComponent]
})
export class IncomesModule { }
