import { Employee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  base_url = "http://localhost:8080/api/v1/employees"


  constructor(private httpCliend: HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
    return this.httpCliend.get<Employee[]>(`${this.base_url}`);
  }
}
