// ✅ Defines the NgRx effects which listen for dispatched actions and perform API calls then dispatch data into global state
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeesService } from '../employees.service';
import * as EmployeeActions from './employees.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class EmployeesEffects {
    constructor(private actions$: Actions, private service: EmployeesService) { }

    // # Load Employees Effect (GET Employees Form API)
    loadEmployees$ = createEffect(() =>

        // Effect listens for the load Employees action
        this.actions$.pipe(
            ofType(EmployeeActions.loadEmployees), // listen to action of type EmployeeAction its name is loadEmployees

            mergeMap(() =>
                this.service.getAll().pipe( // Call the backend using the service method getAll() and open stream pipe to listen to it (returns observable of employees)

                    // When data comes back, dispatch loadEmployeesSuccess with the employee list (save res in global store)
                    map(employees => EmployeeActions.loadEmployeesSuccess({ employees })),

                    // Handle Errors
                    // catchError(() => of({ type: '[Employees] Load Failed' }))
                    catchError(error => of(EmployeeActions.loadEmployeesFailure({ error })))

                )
            )
        )
    );

    // # Delete Employee Effect (DELETE Employee Form API)
    deleteEmployee$ = createEffect(() =>

        // Effect listens for the delete Employee action
        this.actions$.pipe(
            ofType(EmployeeActions.deleteEmployee), // listen to action of type EmployeeActions its name is deleteEmployee

            mergeMap(({ id }) =>
                this.service.delete(id).pipe( // Call the backend using the service method delete(id) and open stream pipe to listen to it (returns observable of employees)

                    // When data comes back, dispatch loadEmployeesSuccess with the employee list (save res in global store)
                    map(() => EmployeeActions.deleteEmployeeSuccess({ id })),

                    // Handle Errors
                    catchError(() => of({ type: '[Employees] Delete Failed' }))
                )
            )
        )
    );

    // Add Employee Effect (POST New Employee data to the API)
    addEmployee$ = createEffect(() =>
        this.actions$.pipe(
            ofType(EmployeeActions.addEmployee),
            mergeMap(({ employee }) =>
                this.service.add(employee).pipe(
                    map(addedEmployee => EmployeeActions.addEmployeeSuccess({ employee: addedEmployee })),
                    catchError(error => of(EmployeeActions.addEmployeeFailure({ error })))
                )
            )
        )
    );

}
