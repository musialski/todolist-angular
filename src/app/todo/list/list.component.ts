import { Component } from '@angular/core';
import { ToDoPosition } from '../models/todo-position';
import { Repo } from '../repo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(public Repo : Repo) { }

}