import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { HttpTaskService } from './httpTask.service';
import { HttpClassService } from './httpClasses.service';
import { SettingsComponent } from './settings/settings.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskElementComponent } from './tasks/task-element/task-element.component';

const appRoutes:Routes=[
  {path: '', component:TasksComponent},
  {path: 'settings', component:SettingsComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    AddTaskComponent,
    SettingsComponent,
    TaskElementComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpTaskService,HttpClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
