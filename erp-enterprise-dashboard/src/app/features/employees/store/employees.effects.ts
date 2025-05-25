import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeesService } from '../employees.service';
import * as EmployeeActions from './employees.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class EmployeesEffects {
    constructor(private actions$: Actions, private service: EmployeesService) { }

    // # Load Employees Effect
    loadEmployees$ = createEffect(() =>
        // Effect listens for the loadEmployees action.
        this.actions$.pipe(
            ofType(EmployeeActions.loadEmployees),
            // Call the backend using the service method getAll() (returns observable of employees).
            mergeMap(() =>
                this.service.getAll().pipe(
                    // When data comes back, dispatch loadEmployeesSuccess with the employee list.
                    map(employees => EmployeeActions.loadEmployeesSuccess({ employees })),
                    catchError(() => of({ type: '[Employees] Load Failed' }))
                )
            )
        )
    );

    // # Delete Employee Effect
    deleteEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.deleteEmployee),
            mergeMap(({ id }) =>
                this.service.delete(id).pipe(
                    map(() => EmployeeActions.deleteEmployeeSuccess({ id })),
                    catchError(() => of({ type: '[Employees] Delete Failed' }))
                )
            )
        )
    );
}
