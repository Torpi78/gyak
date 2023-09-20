import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TesztComponent } from './teszt/teszt.component';

const routes: Routes = [
  {path: "teszt", component:TesztComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
