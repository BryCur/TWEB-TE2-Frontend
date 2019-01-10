import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopularPageComponent } from './popular-page/popular-page.component';
import { UpcommingPageComponent } from './upcomming-page/upcomming-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'popular', pathMatch: 'full' },
  { path: 'popular', component: PopularPageComponent },
  { path: 'upcomming', component: UpcommingPageComponent },

  //{ path: '*', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
