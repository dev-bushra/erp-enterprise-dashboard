import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadEmployees, deleteEmployee, addEmployeeSuccess, addEmployee } from '../../store/employees.actions';
import { selectAllEmployees, selectEmployeesLoading } from '../../store/employees.selectors';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/shared/model/employee.model';
import { CommonModule } from '@angular/common';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';
import { MatPaginator } from '@angular/material/paginator'; // You can still import MatPaginator class in your component for logic purposes


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})

export class EmployeesListComponent implements OnInit {
  constructor(private store: Store, private dialog: MatDialog) { }

  // Streams Channel
  employees$ = this.store.select(selectAllEmployees); // Get employees form global store and make a stream of it call it employees$
  loading$: Observable<boolean> = this.store.select(selectEmployeesLoading); // Get loading from global store and make a stream of it call it loading$

  // Mat Table Data
  dataSource = new MatTableDataSource<Employee>(); // table data
  displayedColumns: string[] = ['name', 'phone', 'location', 'company', 'actions']; // table columns names
  @ViewChild(MatPaginator) paginator!: MatPaginator; // table pagination
  // @ViewChild gets a reference to a DOM element or component/directive in your template so you can interact with it programmatically.

  ngOnInit(): void {
    // Get employees data from endpoint and store it in global store
    this.store.dispatch(loadEmployees());

    // Fill Mat Table with the stream employees$ data
    this.employees$.subscribe((data) => {
      if (data) {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  // Delete Employee
  delete(id: number) {
    this.store.dispatch(deleteEmployee({ id })); // dispatch delete action to delete employee from global state
  }

  // Add Employee Dialog
  addEmployeeDialog() {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      width: '80%',

      panelClass: 'custom-dialog-container',
      backdropClass: 'custom-backdrop'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

        // Fill this value with the Met Dialog Inputs filed data
        const newEmployee: Employee = {
          id: result.id,
          name: result.name,
          phone: result.phone,
          email: result.email,
          address: { city: result.city },
          company: { name: result.companyName }
        };

        this.store.dispatch(addEmployee({ employee: newEmployee })); // dispatch add action to add new employee to global state
      }
    })
  }

  // Confirm Deleting Employee Dialog
  confirmDelete(employee: Employee) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '80%',
      data: { name: employee.name },

      panelClass: 'custom-dialog-container',
      backdropClass: 'custom-backdrop'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(employee.id);
      }
    });
  }
}