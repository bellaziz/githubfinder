import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {

  public happytext="The manager is on vacation";
  public myTodos=[
    "todo 1",
    "todo 2",
    "todo 3"
  ];
  constructor() { }

  ngOnInit() {
    this.happytext = "The manager is sick!";
  }

  makehappier(){
    this.happytext = "The manager got fired !";
  }
}
