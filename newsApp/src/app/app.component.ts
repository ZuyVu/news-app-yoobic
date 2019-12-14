import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtr: AlertController,
    private authService: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  onLogOut() {
    console.log('LOGOUT');
    this.authService.logout();
    this.router.navigateByUrl('/auth');
  }

  async onClickDummyButton() {
    console.log('Dummy button is clicked');

    const alert = await this.alertCtr.create({
      header: 'Feature not Implemented',
      message: 'This is a just a dummy button.',
      buttons: ['OK']
    });

    await alert.present();

  }


}
