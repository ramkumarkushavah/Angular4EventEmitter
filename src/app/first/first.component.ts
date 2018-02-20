import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  

  first(count){

    console.log("Hello From First Component");
    console.log("Data Coming From the Child Component",count);
  }

}
