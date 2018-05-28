import { Component, OnInit } from '@angular/core';
import { AdvanceService } from '../advance.service';

@Component({
  selector: 'app-advance',
  templateUrl: './advance.component.html',
  styleUrls: ['./advance.component.css']
})
export class AdvanceComponent implements OnInit {

  public employees=[];

  constructor(private _advanceService:AdvanceService){}


  ngOnInit() {
    this.employees = this._advanceService.getEmployees();
  }

}
