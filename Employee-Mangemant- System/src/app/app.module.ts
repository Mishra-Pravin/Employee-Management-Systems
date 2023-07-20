import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenets/login/login.component';
import { DashBoardComponent } from './componenets/dash-board/dash-board.component';
import { SignUpComponent } from './componenets/sign-up/sign-up.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddEmployeeComponent } from './componenets/add-employee/add-employee.component';
import { UserArrayService } from './Services/user-array.service';
import { EmployeeService } from './Services/employee.service';
import { EditEmployeeComponent } from './componenets/edit-employee/edit-employee.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    SignUpComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserArrayService, AuthGuard,EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }