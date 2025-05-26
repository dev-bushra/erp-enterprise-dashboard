// ✅ Defines NgRx selectors that get specific data from the global state to use in a components
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employees.reducer';


// Gets the whole 'employees{}' state slice from the global store
const selectEmployeeFeature = createFeatureSelector<EmployeeState>('employees');

// Get employees[] from the state
export const selectAllEmployees = createSelector(
    selectEmployeeFeature,
    state => state.employees
);

// Get loading{} from the state
export const selectEmployeesLoading = createSelector(
    selectEmployeeFeature,
    state => state.loading
);
