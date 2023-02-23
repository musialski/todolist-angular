import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoPosition } from '../models/todo-position';
import { Repo } from '../repo';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

	public Description : string = "";

	constructor(private repo : Repo, private router : Router) { }

	onSubmit(){
		let maxId : number = Math.max(this.repo.ToDoPositionArray.map(x => x.Id)[0]);

		let position : ToDoPosition = new ToDoPosition(maxId + 1, this.Description);
		this.repo.ToDoPositionArray.push(position);

		this.router.navigateByUrl('/');
	}
}