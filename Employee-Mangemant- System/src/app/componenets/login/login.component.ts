import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserArrayService } from 'src/app/Services/user-array.service';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  sampleForm!: FormGroup;

  constructor(private userData: UserArrayService,private authService:AuthServiceService,private router: Router) {}

  ngOnInit(): void {
    this.sampleForm = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')])
    });
  }

  LoginSubmit(): void {
    const email = this.sampleForm.get('emailAddress')?.value;
    const password = this.sampleForm.get('pass')?.value;
    const isAuthenticated = this.authService.login(email, password);
    if (isAuthenticated) {
      console.log('User logged in:', email);
      
      this.router.navigate(['/dashboard']);
    } else {
      console.log('Invalid email or password');
    }
  }
}