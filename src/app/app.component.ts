import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { FarmaciaPage } from '../pages/farmacia/farmacia';
import { HospitalPage } from '../pages/hospital/hospital';
import { DelegaciaPage } from '../pages/delegacia/delegacia';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
  [x: string]: any;
  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;


constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  this.pages = [
    { title: 'Home', component: HomePage },
    { title: 'Hospitais', component: HospitalPage },
    { title: 'Farmácias', component: FarmaciaPage },
    { title: 'Delegacias', component: DelegaciaPage },
    { title: 'Sobre', component: HomePage },
    { title: 'Sair', component: LoginPage },
  ];

}

initializeApp() {
  this.platform.ready().then(() => {
    this.statusBar.backgroundColorByHexString('#FFF111');
    this.splashScreen.hide();
  });
}

homePage() {
  this.nav.push(HomePage);
}

hospitalPage(){
  this.nav.push(HospitalPage);
}

farmaciaPage(){
  this.nav.push(FarmaciaPage);
}

delegaciaPage(){
  this.nav.push(DelegaciaPage);
}

sobrePage(){
  this.nav.push(HomePage);
}

loginPage() {
  this.nav.push(LoginPage);
}
}
