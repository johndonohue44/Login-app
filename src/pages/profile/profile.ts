import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { CharityPage } from '../charities/charity';
import { OceanPage } from '../ocean/ocean'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

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
}
