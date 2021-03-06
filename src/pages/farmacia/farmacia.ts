import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform, IonicPage } from 'ionic-angular';
import { HomePage } from '../home/home';

declare var google;
let map: any;
let infowindow: any;
let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

@IonicPage()
@Component({
  selector: 'page-farmacia',
  templateUrl: 'farmacia.html',
})
export class FarmaciaPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public platform: Platform) {
    platform.ready().then(() => {
      this.initMap();
    });

  }

  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      console.log(location);
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: location.coords.latitude, lng: location.coords.longitude },
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: { lat: location.coords.latitude, lng: location.coords.longitude },
        radius: 100000,
        type: ['pharmacy']
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, options);
    var myplace = { lat: -33.8665, lng: 151.1956 };
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Identificação: ' + place.place_id + '<br>' +
        place.vicinity + '</div>');
      infowindow.open(map, this);
    });

    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };

    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      icon: image
    });

  }

  openHome() {
    this.navCtrl.popTo(HomePage);
  }

}
