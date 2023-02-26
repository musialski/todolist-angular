import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoPosition } from '../models/todo-position';
import { Repo } from '../repo';

@Component({
	selector: 'app-delete',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

	private id : number = -1;
	Position! : ToDoPosition;

	constructor (private repo : Repo, private route : ActivatedRoute,
		private router : Router){
			this.id = Number(route.snapshot.paramMap.get("id"));
			let position = repo.ToDoPositionArray.find(x => x.Id == this.id)
			if (position !== undefined){
				this.Position = position;
			}
	}

	onSubmit(){
		if (this.Position !== undefined){
			let positionIndex : number = this.repo.ToDoPositionArray.indexOf(this.Position);
			this.repo.ToDoPositionArray.splice(positionIndex, 1);

			this.router.navigateByUrl("/");
		}
	}

}
