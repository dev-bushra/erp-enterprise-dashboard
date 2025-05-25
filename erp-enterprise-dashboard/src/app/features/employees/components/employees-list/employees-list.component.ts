import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEmployees, deleteEmployee } from '../../store/employees.actions';
import { selectAllEmployees, selectLoading } from '../../store/employees.selectors';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
})
export class EmployeesListComponent implements OnInit {
  employees$ = this.store.select(selectAllEmployees);
  loading$ = this.store.select(selectLoading);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
  }

  delete(id: number) {
    this.store.dispatch(deleteEmployee({ id }));
  }
}
