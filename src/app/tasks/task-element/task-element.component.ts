import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpTaskService } from '../../httpTask.service'
import { HttpClassService } from '../../httpClasses.service'
@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.css']
})
export class TaskElementComponent implements OnInit {
	@Input() task:{taskid:string,class:String,text:String,endtime:String};
	@Output() updateEvent = new EventEmitter<any>();

  classes=[];
  sColor:string;
  sColor2:string;
  constructor(private taskService:HttpTaskService, private classService:HttpClassService) { }
  ngOnInit() {
    this.setColor();

  }

onDeleteTasks(){
  this.taskService.deleteTask(this.task.taskid)
  .subscribe(
    (response)=>{console.log(this.task.taskid); this.updateEvent.emit();},
    (error)=>{console.log(error)}
  );
}

  setColor(){
        this.classService.getClass()
    .subscribe(
      (response) => {  this.classes =  response;

    for (var i=0; i<this.classes.length;i++){
      if (this.task.class==this.classes[i].className){
        this.sColor=this.classes[i].color;
        this.sColor2=this.classes[i].secColor;
      }
    }
      },
      (error) => console.log(error)
      );


  }




}
