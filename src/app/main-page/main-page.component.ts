import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Graph } from '../graph';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  graphs: Graph[];
  FrontPageImage: string;

  constructor(private restApiService: RestApiService) {
    this.graphs = [];
   }

   getFrontImg() {
     for (const item of this.graphs) {
       if (item.title === 'Front-Page-Image') {
          this.FrontPageImage = item.image;
       }
     }
   }

   ngOnInit() {
    this.restApiService.getGraphs('front-page-images').subscribe((data: any[]) => {
      this.graphs = data;
      this.getFrontImg();
      return;
    });
  }
}
