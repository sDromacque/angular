import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { Observable, Subscriber } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  map: any;

  constructor() {}

  public ngAfterViewInit(): void {
    this.loadMap();
  }

  private getCurrentPosition(): any {
    return new Observable((observer: Subscriber<any>) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          observer.next({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          observer.complete();
        });
      } else {
        observer.error();
      }
    });
  }

  private loadMap(): void {
    let token = environment.mapbox.accessToken;
    let defaultLatitude = environment.mapbox.defaultLatitude;
    let defaultLongitude = environment.mapbox.defaultLongitude;

    this.map = L.map('map').setView([defaultLatitude, defaultLongitude], 5);
    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${token}`,
      {
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(this.map);

    this.getCurrentPosition().subscribe((position: any) => {
      this.map.flyTo([position.latitude, position.longitude], 13);

      const icon = L.icon({
        iconUrl: 'favicon.ico',
        shadowUrl: 'favicon.ico',
        popupAnchor: [13, 0],
      });

      const marker = L.marker([position.latitude, position.longitude], {
        icon,
      }).bindPopup('Angular Leaflet');
      const marker1 = L.marker([position.latitude + 1, position.longitude], {
        icon,
      }).bindPopup('Angular Leaflet');
      marker.addTo(this.map);
      marker1.addTo(this.map);
    });
  }
}
