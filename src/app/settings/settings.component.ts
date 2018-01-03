import { Component, OnInit } from '@angular/core';
import { HttpClassService } from  '../httpClasses.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  className="";
  color="";
  secColor="";
  class={className:"Test", color:"0000",secColor:"Secondary"};
  classes=[];
  constructor(private classService:HttpClassService) { }

  ngOnInit() {
    this.classService.getClass()
    .subscribe(
      (response) => {console.log(response);  this.classes =  response},
      (error) => console.log(error)
    );
  }

  saveClass(){
  this.class={className:this.className,color:this.color,secColor:this.secColor};
    this.classService.postClass(this.class)
    .subscribe(
      (res)=>console.log(res),
          (err)=>console.log(err)
        );

  }

}
