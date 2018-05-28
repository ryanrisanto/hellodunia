import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-testwo',
  templateUrl: './testwo.component.html',
  styleUrls: ['./testwo.component.css']
})
export class TestwoComponent implements OnInit {

  //@Input() public parentData;
  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  public message="jadi ada apa?";
  public person={
    "Firstname":"Ryan",
    "LastName":"Ardhy"
  };

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
    this.childEvent.emit("Halo Netizen");
  }

}
