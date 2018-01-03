import { Injectable } from '@angular/core';
import { OnInit} from '@angular/core';
import {Headers,Http, Response} from '@angular/http';
import "rxjs/add/operator/map";
@Injectable()
export class HttpClassService {
  constructor(private http: Http){}
  classes=[];


  getClass(){
    console.log("getting tasks..");
    return this.http.get('http://localhost:5000/class').map((response:Response) => {var data = response.json(); return data});
  }

  postClass(classes:{className:String,color:String,secColor:String}){
    this.classes.push({
      className: classes.className,
      color: classes.color,
      secColor: classes.secColor

    });
      return this.http.post('http://localhost:5000/class', classes);
  }


}
