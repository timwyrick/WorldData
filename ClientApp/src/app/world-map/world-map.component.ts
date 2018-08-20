import { Component, OnInit } from '@angular/core';
import { AgmMap, AgmDataLayer } from '@agm/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {
  title: string = 'First Map!'
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private http: HttpClient) { }

  geoJsonObject: Object;

  getGeoJson() : Observable<Object> {
    return this.http.get('./data/country-models.json')
  }
  

  ngOnInit() {
    this.getGeoJson().subscribe(
      data => {
        this.geoJsonObject = data
      }
    );
  }

}
