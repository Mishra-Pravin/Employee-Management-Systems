import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './componenets/dash-board/dash-board.component';
import { LoginComponent } from './componenets/login/login.component';
import { SignUpComponent } from './componenets/sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { AddEmployeeComponent } from './componenets/add-employee/add-employee.component';
import { EditEmployeeComponent } from './componenets/edit-employee/edit-employee.component';

const routes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashBoardComponent },//, canActivate: [AuthGuard] },
  { path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'edit-employee/:id', component: EditEmployeeComponent ,canActivate: [AuthGuard] },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: '**', redirectTo: '/signup' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }