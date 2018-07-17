import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SessionService } from '../providers/session/session.service';
import { Storage } from '@ionic/storage';
import { ReservaPage } from '../pages/reserva/reserva';
import { ListItemPage } from '../pages/list-item/list-item';
@Component({
  selector : 'myapp',
  templateUrl: 'app.html'

})

export class MyApp {
  
 
  rootPage:any = HomePage;
  @ViewChild(Nav)
  public Nav : Nav;
  public paginas = [
    {titulo : 'Home', componente : ReservaPage, icon : 'home'}, 
    {titulo : 'Nova Reserva', componente : ListItemPage, icon : 'add'},
    {titulo: 'Sair', componente: HomePage, icon:'exit'},
   
  ]
   
   public user;
   public nome;
  
       

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
    this.storage.get('data').then((val) => {
      this.user = val;
      this.nome = this.user.nome;
       console.log(this.user);
      if(this.user ==! null || this.user.nome == null){
         this.rootPage = HomePage;
      } else {
        this.rootPage = ReservaPage;
       
      }
    }). catch((e)=>{
      this.rootPage = HomePage;
      
    });
  }
            

  irParaPagina(componente){
     if(componente == HomePage) {
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