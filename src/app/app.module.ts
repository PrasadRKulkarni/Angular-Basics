import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeelist.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeecount.component';
import { SimpleComponent } from './employee/Others/simple.component';
import { HomeComponent } from './home/home.component';
import { FileNotFoundComponent } from './filenotfound.component';
import { UserPreferenceService } from './employee/userpreference.service';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employees', component: EmployeeComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: FileNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, EmployeeComponent,
    EmployeeListComponent, EmployeeTitlePipe,
    EmployeeCountComponent, SimpleComponent,
    HomeComponent, FileNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserPreferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
