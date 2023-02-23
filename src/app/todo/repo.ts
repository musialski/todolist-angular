import { Injectable } from "@angular/core";
import { ToDoPosition } from "./models/todo-position";

@Injectable({
    providedIn: 'root',
})
export class Repo
{
    constructor(){
        this.ToDoPositionArray = [
            new ToDoPosition(1, "zadanie1"),
            new ToDoPosition(2, "zadanie2"),
            new ToDoPosition(3, "zadanie3")
        ];

        console.log("repo constructed");
    }

    public ToDoPositionArray : ToDoPosition[];
}