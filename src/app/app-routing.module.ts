import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './todo/list/list.component';
import { DeleteComponent } from './todo/delete/delete.component';
import { EditComponent } from './todo/edit/edit.component';
import { CreateComponent } from './todo/create/create.component';

const routes: Routes = [
  { 'path': '', component: ListComponent },
  { 'path': 'create', component: CreateComponent },
  { 'path': 'edit/:id', component: EditComponent },
  { 'path': 'delete/:id', component: DeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
