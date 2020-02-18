import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Graph } from '../graph';

@Component({
  selector: 'app-titanic-page',
  templateUrl: './titanic-page.component.html',
  styleUrls: ['./titanic-page.component.scss']
})
export class TitanicPageComponent implements OnInit {

  graphs: Graph[];

  constructor(private restApiService: RestApiService) {
    this.graphs = [];
   }

  ngOnInit() {
    this.restApiService.getGraphs('titanic-images').subscribe((data: any[]) => {
      this.graphs = data;
      return;
    });
  }

}
