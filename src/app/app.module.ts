import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { LaTrafficPageComponent } from './la-traffic-page/la-traffic-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TitanicPageComponent } from './titanic-page/titanic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavigationBarComponent,
    ProjectsComponent,
    LaTrafficPageComponent,
    TitanicPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    FormsModule,
    ScrollToModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
