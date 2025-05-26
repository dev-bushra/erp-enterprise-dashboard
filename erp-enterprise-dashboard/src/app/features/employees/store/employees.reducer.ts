// ✅ Defines the NgRx reducer which updates the global state in response to actions
import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employees.actions'; // Get all actions name and props
import { Employee } from 'src/app/shared/model/employee.model';

// Employees interface
export interface EmployeeState {
    employees: Employee[];
    loading: boolean;
    error: string | null;
}

// Global State
const initialState: EmployeeState = {
    employees: [],
    loading: false,
    error: null
};

export const employeeReducer = createReducer(
    initialState,

    // # Actions Handlers:-

    // ✅ Load Employees (Get employees data form API, while make loading/spinner on)
    on(EmployeeActions.loadEmployees, state => ({ ...state, loading: true })),

    // ✅ Load Employees Success (When API returns employees, store them and turn off loading)
    on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({
        ...state,
        employees,
        loading: false,
        error: null
    })),

    // ✅ Load Employees Failure
    on(EmployeeActions.loadEmployeesFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),

    // ✅ Delete Employee Success (After delete is successful, we remove that employee from the list in the global store)
    on(EmployeeActions.deleteEmployeeSuccess, (state, { id }) => ({
        ...state,
        employees: state.employees.filter(emp => emp.id !== id),
        loading: false,
    })),

    // ✅ Add Employee: only trigger effects to add employ to API
    // on(EmployeeActions.addEmployee, (state, { employee }) => ({
    //     ...state,
    //     employees: [...state.employees, employee]
    // })),

    // ✅ Add Employee Success (Add new employee data to the API directly by triggers effects to update the API data first, then by addEmployeeSuccess when its call its add the new employee data to the global state from API directly by using loadEmployees to get the new updated data from API)
    on(EmployeeActions.addEmployeeSuccess, (state, { employee }) => ({
        ...state,
        employees: [...state.employees, employee],
        loading: false,
        error: null
    })),

    // ✅ Add Employee Failure 
    on(EmployeeActions.addEmployeeFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))



);
