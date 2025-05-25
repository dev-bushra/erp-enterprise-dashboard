import { createAction, props } from '@ngrx/store';
import { Employee } from '../employees.service'; // Get Employees Data from Endpoint

// Actions Names & Props:

// ✅ Load Employees (fetch all employees from API & store now)-(GET → API/STORE)
export const loadEmployees = createAction('[Employees] Load');

// ✅ Load Employees Success (we got the employees from the API, now put them in the store)-(ADD → STORE)
export const loadEmployeesSuccess = createAction('[Employees] Load Success', props<{ employees: Employee[] }>());

// ✅ Delete Employee (ask to delete one employee)-(EFFECTS → API)
export const deleteEmployee = createAction('[Employees] Delete', props<{ id: number }>());

// ✅ Delete Employee Success (after deletion, update store by removing that employee)-(UPDATE → STORE)
export const deleteEmployeeSuccess = createAction('[Employees] Delete Success', props<{ id: number }>());
