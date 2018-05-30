import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { OceanPage } from '../ocean/ocean';
import { RhinoPage } from '../rhinos/rhinos';

@Component({
  selector: 'page-charity',
  templateUrl: 'charity.html'
})
export class CharityPage {

  constructor(public navCtrl: NavController) {

  }
  navigateToLogin() {
    this.navCtrl.push(LoginPage);
    }
  navigateToHome() {
      this.navCtrl.push(HomePage);
  }
  navigateToCharity() {
    this.navCtrl.push(CharityPage);
}
navigateToOcean() {
    this.navCtrl.push(OceanPage);
}
navigateToRhino() {
    this.navCtrl.push(RhinoPage);
}


}
