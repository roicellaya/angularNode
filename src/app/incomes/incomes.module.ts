import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomesRoutingModule } from './incomes-routing.module';
import { IncomeComponent } from './income/income.component';

@NgModule({
  imports: [
    CommonModule,
    IncomesRoutingModule
  ],
  declarations: [IncomeComponent]
})
export class IncomesModule { }
