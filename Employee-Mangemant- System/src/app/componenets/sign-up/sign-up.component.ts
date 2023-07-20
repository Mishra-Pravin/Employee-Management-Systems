import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserArrayService } from 'src/app/Services/user-array.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  sampleForm!: FormGroup;

  constructor(private userData: UserArrayService, private router: Router) {}

  ngOnInit(): void {
    this.sampleForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(2)]),
      'emailAddress': new FormControl('', [Validators.required, Validators.email]),
      'age': new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      'pass': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')])
    });
  }

  handleSubmit(): void {
    const user = this.sampleForm.value;
    console.log(user);
    this.userData.addUser(user);
    this.sampleForm.reset();
    this.router.navigate(['/login']); // Redirect to login after signup
  }
}
