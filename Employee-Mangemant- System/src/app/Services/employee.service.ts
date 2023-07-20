import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees:any[] = [];
  addEmployee(employee:any):void{
    this.employees.push(employee);
  }

  getEmployees(): any[] {
    return this.employees;
  }

  deleteEmployee(employee: any): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }


  getEmployeeById(id:number):any{
    return this.employees.find(emplo => emplo.id === id);
  }
  constructor() { }


  updateEmployee(updataEmploy:any):void{
    // Find the index of the employee in the employees array based on the updatedEmployee's ID
    const index = this.employees.findIndex(emplo => emplo.id === updataEmploy.id)
  // Check if the employee is found in the array
    if(index !== -1){
      // If found, update the employee at the corresponding index with the updatedEmployee object
      this.employees[index] = updataEmploy;
    }
  }
}



