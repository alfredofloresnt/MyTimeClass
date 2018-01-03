import { Injectable } from '@angular/core';
import { OnInit} from '@angular/core';
import {Headers,Http, Response} from '@angular/http';
import "rxjs/add/operator/map";
@Injectable()
export class HttpTaskService {
  constructor(private http: Http){}
  tasks=[];


  getTasks(){
    console.log("getting tasks..");
    return this.http.get('http://localhost:5000/tasks').map((response:Response) => {var data = response.json();
                                                                                    return data});
/*
    return this.http.get('http://localhost:5000/tasks')
    .subscribe(
      (response:Response)=>{
        this.tasks=response.json();
        console.log(this.tasks);
      }
    );
    */
  }

  postTask(task:{taskid:String,class:String,text:String,endtime:String}){
    //var num=Math.floor(Math.random() * 99999)+"task";
    this.tasks.push({
      taskid: task.taskid,
      class: task.class,
      text: task.text,
      endtime: task.endtime
    });
      return this.http.post('http://localhost:5000/tasks', task);
  }


  deleteTask(id:string){
    return this.http.delete('http://localhost:5000/tasks/'+id).map(success => success.status);
  }

  getVarTasks(){
    //console.log(this.tasks);
    return this.tasks;
  }


}
