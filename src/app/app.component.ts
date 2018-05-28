import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SessionService } from '../providers/session/session.service';
import { Storage } from '@ionic/storage';
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
   
 
  
  constructor(platform: Platform, statusBar: StatusBar,
     splashScreen: SplashScreen, 
    public storage : Storage,
    public session : SessionService,
    public toast : ToastController,
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }

  irParaPagina(componente){
     if(componente = HomePage) {
       console.log("o usuario saiu");
       this.session.clearAll()
       .then((res)=>{
        this.toast.create({
          message: 'Volte sempre!',
          duration: 3000,
          position: 'top'
        }).present();
       }).catch(e => {
         console.log(e);
       })
       
    
     }
    this.Nav.setRoot(componente);
  }
}