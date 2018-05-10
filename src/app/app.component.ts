import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';

@Component({
  selector : 'myapp',
  templateUrl: 'app.html'

})

export class MyApp {
 
  rootPage:any = HomePage;
  @ViewChild(Nav)
  public Nav : Nav;
  public paginas = [
    {titulo: 'Sair', componente: HomePage, icon:'exit'}
  ]

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irParaPagina(componente){
    this.Nav.setRoot(componente);
  }
}