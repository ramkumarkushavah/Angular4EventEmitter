import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  third(){

    console.log("Hello From Third Component");
  }

  parentThird(x){

    console.log("Value Coming from ChildFourth Component to Third",x);

  }


}
