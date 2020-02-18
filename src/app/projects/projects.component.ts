import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Graph } from '../graph';
import { getNumberOfCurrencyDigits } from '@angular/common';
import { getRandomString } from 'selenium-webdriver/safari';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  graphs: Graph[];
  titanicImage: string;
  laImage: string;

  constructor(private restApiService: RestApiService) {
    this.graphs = [];
   }

  getImgs() {
    for (const item of this.graphs) {
      if (item.title === 'LA-Project-Thumbnail') {
        this.laImage = item.image;
      } else if (item.title === 'Titanic-Project-Thumbnail') {
        this.titanicImage = item.image;
      }
    }
    return;
  }

  ngOnInit() {
    this.restApiService.getGraphs('projects-page-images').subscribe((data: any[]) => {
      this.graphs = data;
      this.getImgs();
      return;
    });
  }

}
