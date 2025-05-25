import { createReducer, on } from '@ngrx/store';
import * as EmployeeActions from './employees.actions'; // Get all actions name and props
import { Employee } from '../employees.service'; // Get employees data from endpoint

// Employees interface
export interface EmployeeState {
    employees: Employee[];
    loading: boolean;
}

// Global State
const initialState: EmployeeState = {
    employees: [],
    loading: false
};

export const employeeReducer = createReducer(
    initialState,
    
    // # Actions Handlers:-

    // Load Employees (Get employees data form API, while make loading/spinner on)
    on(EmployeeActions.loadEmployees, state => ({ ...state, loading: true })), 

    // Load Employees Success (When API returns employees, store them and turn off loading)
    on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({ 
        ...state,
        employees,
        loading: false
    })),

    // Delete Employee Success (After delete is successful, we remove that employee from the list.)
    on(EmployeeActions.deleteEmployeeSuccess, (state, { id }) => ({
        ...state,
        employees: state.employees.filter(emp => emp.id !== id)
    }))
);
