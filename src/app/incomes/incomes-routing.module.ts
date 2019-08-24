import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeComponent } from './income/income.component';

const routes: Routes = [
  { path: '', component: IncomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomesRoutingModule { }
