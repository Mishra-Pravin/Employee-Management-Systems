import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {

  employees:any[] =[];  //Array to Store the Employee Data
  nextId:number = 1;
  searchTerm: string = '';  // Holds the search term entered by the user
  



  constructor(private employeeService:EmployeeService, private router : Router){}
  ngOnInit():void {
    this.employees = this.employeeService.getEmployees();  //use the service to get Employees

    this.fetchEmployees();
    // The ngOnInit() method is a lifecycle hook in 
    // Angular that is called after the component has been initialized. 
    // By implementing this method, you can perform any necessary initialization tasks when the component is ready. 
    // In this case, the fetchEmployees() method is called within ngOnInit() to fetch the list of employees.

    
  
  
  
  }


  addEmployee():void{
    // Logic to open a model or navigate to the add employee page

    this.router.navigate(['/add-employee',{nextId:this.nextId}]); //Navigate to the add Employee page
    this.nextId++; // Increment the nextId for the next employee

  }

  editEmployee(employee:any):void{
    // Logic or function to edit employee page
    this.router.navigate(['edit-employee',employee.id])

  }


  deleteEmployee(employee:any):void{
    console.log(`Delete Button Clicked and deleted ${employee.id} Employee`);
    this.employeeService.deleteEmployee(employee); //use SERVICE TO DELETE Employees
  }

  fetchEmployees():void{
    this.employees = this.employeeService.getEmployees();
  }

  // The fetchEmployees() method is a custom method defined in the DashBoardComponent class. 
  // It is responsible for retrieving the list of employees from the employeeService 
  // and assigning it to the employees property of the component.


  searchEmplo(): void {
    // The searchEmplo() method is called whenever the user types in the search field.
    // It can be implemented to filter the employees based on the search term entered by the user.
    // You can add the logic to filter the employees array using the searchTerm.
    // For example:
    this.employees = this.employeeService.getEmployees().filter(employee =>
      employee.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    // The employees array is updated with the filtered results, and it will be re-rendered in the HTML template.
  }



 
}
