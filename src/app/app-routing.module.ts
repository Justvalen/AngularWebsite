import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LinksComponent } from './links/links.component';
import { LaTrafficPageComponent } from './la-traffic-page/la-traffic-page.component';
import { TitanicPageComponent } from './titanic-page/titanic-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/la-traffic-project', component: LaTrafficPageComponent },
  { path: 'projects/titanic-eda', component: TitanicPageComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'links', component: LinksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
