import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';

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

}
