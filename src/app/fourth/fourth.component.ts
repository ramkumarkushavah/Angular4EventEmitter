import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

  @Output() fourthchild = new EventEmitter();

  counter = 0;

  constructor() { }

  ngOnInit() {
  }



  fourth(){

    console.log("Hello From Fourth Child Component");

    this.counter = this.counter +1;
    this.fourthchild.emit(this.counter)
      this.fourth1();
  }

  fourth1(){

    console.log("Hello From Fourth Child Component");

    this.counter = this.counter +1;
    this.fourthchild.emit("kkk")
  }

}
