// ✅ Defines all NgRx actions
import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/shared/model/employee.model'; // ✅ RIGHT

// Actions Names & Props:-

// ✅ Load Employees (fetch all employees from API & store now)-(GET → API/STORE)
export const loadEmployees = createAction('[Employees] Load');

// ✅ Load Employees Success (we got the employees from the API, now put them in the store)-(ADD → STORE)
export const loadEmployeesSuccess = createAction('[Employees] Load Success', props<{ employees: Employee[] }>());

// ✅ Load Employees Failure : When you're trying to load all employees from the API and the request fails -To handle loading screen failure
export const loadEmployeesFailure = createAction('[Employees] Load Failure', props<{ error: any }>());

// ✅ Delete Employee (ask to delete one employee)-(EFFECTS → API)
export const deleteEmployee = createAction('[Employees] Delete', props<{ id: number }>());

// ✅ Delete Employee Success (after deletion, update store by removing that employee)-(UPDATE → STORE)
export const deleteEmployeeSuccess = createAction('[Employees] Delete Success', props<{ id: number }>());

// ✅ Add Employee (only trigger effects to make API call to add new employee)
export const addEmployee = createAction('[Employees] Add Employee', props<{ employee: Employee }>());

// ✅ Add Employee Success (update store with new employee)-(ask to add new data to the store)-(POST → API/STORE)
export const addEmployeeSuccess = createAction('[Employees] Add Employee Success', props<{ employee: Employee }>());

// ✅ Add Employee Failure (store error) : when you're trying to create a new employee (POST) and something goes wrong. - To show form-specific error
export const addEmployeeFailure = createAction('[Employees] Add Employee Failure', props<{ error: any }>());
