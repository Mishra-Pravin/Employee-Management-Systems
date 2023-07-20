import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeForm!: FormGroup;
  nextId: number = 1;

  constructor(
    private fb: FormBuilder,
    private emplService: EmployeeService,
    private rout: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      // Define form controls with initial values and validators
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.minLength(10)]],
      emailId: ['', [Validators.required, Validators.email]],
      department: ['', [Validators.required]]
    });

    // this.route.paramMap.subscribe(params => { // Subscribe to the paramMap observable to get the route parameters
    //   const nextIdParam = params.get('nextId'); // Retrieve the value of the 'nextId' parameter from the paramMap

    //   if (nextIdParam) { // Check if the 'nextId' parameter exists
    //     this.nextId = +nextIdParam; // If it exists, convert it to a number and assign it to the 'nextId' property
    //   }
    // });

    this.nextId = this.emplService.getEmployees().length + 1; // Initialize nextId with the length of existing employees plus 1
    
  }

  saveEmployee(): void {
    if (this.employeeForm.valid) {
      console.log('valid');
      const employee = this.employeeForm.value;
      employee.id = this.nextId++;
      console.log(employee);
      this.emplService.addEmployee(employee);

      this.rout.navigate(['/dashboard']);
    }
  }


  addEmployee(): void {
    if (this.employeeForm.valid) {
      const employee = this.employeeForm.value;
      employee.id = this.nextId++; // Assign the current nextId and then increment it
      this.emplService.addEmployee(employee);
      this.rout.navigate(['/dashboard']);
    }
  }
}