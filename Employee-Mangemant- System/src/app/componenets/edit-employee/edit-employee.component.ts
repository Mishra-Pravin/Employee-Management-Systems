import { Component} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent{

  employeeForm!: FormGroup; // Declare the employeeForm property of type FormGroup
  employee: any; // Declare the employee property to store the fetched employee data

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private rout: Router,
  ) {}

  ngOnInit(): void {
    const employeeId = +this.route.snapshot.paramMap.get('id')!; // Retrieve the employee ID from the route parameter

    this.employee = this.employeeService.getEmployeeById(employeeId); // Fetch the corresponding employee data from the service

    this.employeeForm = this.fb.group({
      // Define form controls with initial values and validators
      firstName: [this.employee.firstName],
      lastName: [this.employee.lastName],
      phoneNumber: [this.employee.phoneNumber],
      emailId: [this.employee.emailId],
      department: [this.employee.department]
    });
  }


  saveEmploye():void{
      // Check if the employeeForm is valid
    if(this.employeeForm.valid){
       // Create an updatedEmploy object by merging the existing employee data with the form values
      const updatedEmploy = {
        ...this.employee,         // Spread operator (...) to copy properties from the existing employee

        ...this.employeeForm.value // Spread operator (...) to copy properties from the form values
      };
      console.log("Updated Employ",updatedEmploy);
      this.employeeService.updateEmployee(updatedEmploy);
      this.rout.navigate(['/dashboard']);    
    }

  }



}
