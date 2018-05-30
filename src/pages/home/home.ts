import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../register/registration';
import { ProfilePage } from '../profile/profile';
import { CharityPage } from '../charities/charity';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

navigateToLogin() {
  this.navCtrl.push(LoginPage);
  }
navigateToRegister() {
  this.navCtrl.push(RegistrationPage);
  }
navigateToProfile() {
  this.navCtrl.push(ProfilePage)
 }
} 
