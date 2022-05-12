import { Component, OnInit } from '@angular/core';
import { DATA,Data } from '../mock-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  sample=DATA;
  selectedInfo?: Data;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data:Data){
    this.selectedInfo=data;
  }
}
