import { Component, OnInit, Output} from '@angular/core';
import { RestApiService } from '../services/rest-api.service';
import { Graph } from '../graph';

@Component({
  selector: 'app-la-traffic-page',
  templateUrl: './la-traffic-page.component.html',
  styleUrls: ['./la-traffic-page.component.scss'],
})
export class LaTrafficPageComponent implements OnInit {

  graphs: Graph[];

  constructor(private restApiService: RestApiService) {
    this.graphs = [];
   }

  ngOnInit() {
    this.restApiService.getGraphs('la-images').subscribe((data: any[]) => {
      this.graphs = data;
      return;
    });
  }

}
