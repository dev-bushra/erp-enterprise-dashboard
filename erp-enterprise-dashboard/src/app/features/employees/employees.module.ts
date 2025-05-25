import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { EmployeesRoutingModule } from "./employees-routing.module";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";


@NgModule({
  declarations: [EmployeesListComponent],
  imports: [
    CommonModule,
    SharedModule,
    EmployeesRoutingModule,
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([EmployeesEffects])
  ]
})
export class EmployeesModule {}
