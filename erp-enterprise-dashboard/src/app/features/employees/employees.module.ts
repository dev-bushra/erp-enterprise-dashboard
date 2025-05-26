// ✅ Defines modules and imports needed for employee management functionality in the all application
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { employeeReducer } from './store/employees.reducer';
import { EmployeesEffects } from './store/employees.effects';
import { AddEmployeeDialogComponent } from './components/add-employee-dialog/add-employee-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

// ✅ Import Angular Material components directly - MatTableModule, MatIconModule, etc.
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [EmployeesListComponent, ConfirmDialogComponent, AddEmployeeDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    EmployeesRoutingModule,
    StoreModule.forFeature('employees', employeeReducer),
    EffectsModule.forFeature([EmployeesEffects]),

    // ✅ Angular Material UI - MatTableModule, MatIconModule, etc.
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MaterialModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule, // MatPaginator is not a standalone component and cannot be imported directly into imports: [] like a standalone directive or pipe.
    // MatPaginator // MatPaginator is a class, not a module. Only modules can go into the imports and exports arrays in NgModules
  ]
})

export class EmployeesModule { }