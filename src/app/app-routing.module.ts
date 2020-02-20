import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { LaTrafficPageComponent } from './la-traffic-page/la-traffic-page.component';
import { TitanicPageComponent } from './titanic-page/titanic-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/la-traffic-project', component: LaTrafficPageComponent },
  { path: 'projects/titanic-eda', component: TitanicPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
