// ✅ Defines EmployeesService which handles API calls to fetch and delete employees using Angular's HttpClient
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/shared/model/employee.model';


@Injectable({ providedIn: 'root' })
export class EmployeesService {
  constructor(private http: HttpClient) {}
  
  // Endpoint
  private API = 'https://jsonplaceholder.typicode.com/users';
  
  // GET Employees form API
  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API);
  }

  // DELETE Employee from API
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }

  // POST Employee to the API
  add(employee: Employee) {
    return this.http.post<Employee>(this.API, employee)
  }
}