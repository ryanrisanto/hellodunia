import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvanceService {

  constructor() { } 

  getEmployees(){
    return[
      {"id":1,"name":"Andrew","age":25},
      {"id":2,"name":"Basuki","age":33},
      {"id":3,"name":"Charlie","age":28},
      {"id":4,"name":"Delta","age":30}
    ];
  }
}
