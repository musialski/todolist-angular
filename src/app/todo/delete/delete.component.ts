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

	constructor (private repo : Repo, private route : ActivatedRoute,
		private router : Router){

		this.id = Number(route.snapshot.paramMap.get("id"));
	}

	onSubmit(){
		let position : ToDoPosition | undefined = this.repo.ToDoPositionArray.find(x => x.Id == this.id);
		if (position !== undefined){
			let positionIndex : number = this.repo.ToDoPositionArray.indexOf(position);
			this.repo.ToDoPositionArray.splice(positionIndex, 1);

			this.router.navigateByUrl("/");
		}
	}

}
