import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
        "id" : 1,
        "firstName" : "Rejaul Karim",
        "lastName" : "Tirtho",
        "email" :"rektiho"
      }
    ]


  }

}
