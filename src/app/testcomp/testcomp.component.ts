import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {

  public name = "";
  public myId = "testId";
  public disab = false;
  public siteUrl = window.location.href;
  public successClass="text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
  "text-success":!this.hasError,
  "text-danger":this.hasError,
  "text-special":this.isSpecial
  };
  public displayname=true;
  public color = "orange";

  public colors = ["orange","red","blue","yellow","pink","purple","green","black"];

  public greeting="";
  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hellooos";
  }

  onClick(event){
    console.log(event);
    this.greeting = event.altKey;
  }

  logMessage(message){
    console.log(message);
  }

}
