import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { CharityPage } from '../charities/charity';

@Component({
  selector: 'page-ocean',
  templateUrl: 'ocean.html'
})
export class OceanPage {

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
}
