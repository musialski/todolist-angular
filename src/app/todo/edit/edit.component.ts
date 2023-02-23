import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoPosition } from '../models/todo-position';
import { Repo } from '../repo';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  constructor(private route : ActivatedRoute, public Repo : Repo,
    private router : Router) { 
    
    this.routeId = Number(this.route.snapshot.paramMap.get('id'));
    let position = this.Repo.ToDoPositionArray.find(x => x.Id == this.routeId);
    if (position !== undefined)
    {
      this.Position = position;
    }
  }

  routeId : number = 0;
  Position : ToDoPosition = new ToDoPosition(0, "");

  editDescription(){
    this.Repo.ToDoPositionArray.filter(x => x.Id == this.routeId)[0].Description = this.Position.Description;
    
    this.router.navigateByUrl('/');
  }

}