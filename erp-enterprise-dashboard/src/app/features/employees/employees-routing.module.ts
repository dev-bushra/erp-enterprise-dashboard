// ✅ Define routing configuration for the Employees feature module, mapping the default path '' to the EmployeesListComponent
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

const routes: Routes = [{ path: '', component: EmployeesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EmployeesRoutingModule {}