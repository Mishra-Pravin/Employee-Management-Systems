import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserArrayService {
  userArray: any[] = [];

  constructor() { }

  
  addUser(user: any): void {
    this.userArray.push(user);
    console.log(this.userArray);
  }

  getUser(email: string, password: string): any {
    return this.userArray.find(user => user.emailAddress === email && user.pass === password);
  }

  
}