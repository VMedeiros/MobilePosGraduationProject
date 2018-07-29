import { HospitalPage } from './../hospital/hospital';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { FarmaciaPage } from '../farmacia/farmacia';
import { DelegaciaPage } from '../delegacia/delegacia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidEnter() {
    this.menuCtrl.swipeEnable(false, 'myMenu');
  }

  openHospital() {
    this.navCtrl.push(HospitalPage);
  }

  openFarmacia() {
    this.navCtrl.push(FarmaciaPage);
  }

  openDelegacia() {
    this.navCtrl.push(DelegaciaPage);
  }
}
