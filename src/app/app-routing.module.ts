import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComp } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'myhome',
    component: HomeComp
  },
  {
    path: 'abouts/:id',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
