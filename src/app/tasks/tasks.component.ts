import { Component, OnInit, Input, Output } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpTaskService } from '../httpTask.service';
import { HttpClassService } from '../httpClasses.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks=[];
  classes=[];
  taskid="0";
  constructor(private taskService:HttpTaskService, private classService:HttpClassService) { }


  ngOnInit() {
    this.onUpdateTasks();

        this.classService.getClass()
    .subscribe(
      (response) => {console.log(response);  this.classes =  response},
      (error) => console.log(error)
    );




  }


  onUpdateTasks(){
    this.taskService.getTasks()
    .subscribe(
      (response) => {console.log(response);  this.tasks =  response},
      (error) => console.log(error)
    );
    console.log("Updating.....");
    //this.taskService.getTasks();

/*
  this.taskService.getTasks()
  .subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  );
  */

}




}
