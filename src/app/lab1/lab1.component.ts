import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css'],
})
export class Lab1Component implements OnInit {
  public nameOfList: any = [];
  public item: any = '';
  public qty: any = '';
  public unit: any = '';

  constructor() {}

  ngOnInit() {}

  addItem(x: any) {
    this.nameOfList.push(x);
    this.item = '';
    this.qty = '';
    this.unit = '';
  }

  remove(x: any) {
    this.nameOfList.splice(x, 1);
  }

  done(x: any) {
    document.getElementById(x)!.style.textDecoration = 'line-through';
  }

  undone(x: any) {
    document.getElementById(x)!.style.textDecoration = 'none';
  }
}
