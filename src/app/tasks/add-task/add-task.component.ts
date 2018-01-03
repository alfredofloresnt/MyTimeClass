import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpTaskService } from '../../httpTask.service';
import { HttpClassService } from '../../httpClasses.service';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

text:string;
endtime:string="99/99/99";
task={taskid:"0",class:"test",text:"test",endtime:"0/0/0"};
classes=[];
class1="default";
taskid:string=Math.floor(Math.random() * 9999)+"id";
@Output() updateEvent = new EventEmitter<any>();
  constructor(private taskService:HttpTaskService, private classService:HttpClassService) { }

  ngOnInit() {
    this.classService.getClass()
    .subscribe(
      (response) => {console.log(response);  this.classes =  response},
      (error) => console.log(error)
    );
  }


saveTask(){
  this.taskid=Math.floor(Math.random() * 9999)+"id";
this.task={taskid:this.taskid,class:this.class1,text:this.text,endtime:this.endtime};
  this.taskService.postTask(this.task)
  .subscribe(
    (res)=>{console.log(this.task.taskid);this.updateEvent.emit();},
        (err)=>console.log(err)
      );
      //this.updateEvent.emit();
      //console.log("emmitiendo.");




}

 updateTaks(){



}
}
