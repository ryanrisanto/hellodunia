import { Component, OnInit } from '@angular/core';
import { AdvanceService } from '../advance.service';

@Component({
  selector: 'app-advance-detail',
  templateUrl: './advance-detail.component.html',
  styleUrls: ['./advance-detail.component.css']
})
export class AdvanceDetailComponent implements OnInit {

  public employees=[];

  constructor(private _advanceService:AdvanceService){}


  ngOnInit() {
    this.employees = this._advanceService.getEmployees();
  }

}
