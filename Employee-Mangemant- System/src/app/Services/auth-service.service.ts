import { Injectable } from '@angular/core';
import { UserArrayService } from './user-array.service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isAuthenticatedValue = false;

  constructor(private userArray: UserArrayService) {}

  isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  login(email: string, password: string): boolean {
    const user = this.userArray.getUser(email, password);
    if (user) {
      this.isAuthenticatedValue = true;
      return true;
    } else {
      this.isAuthenticatedValue = false;
      return false;
    }
  }
}