import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { GESTURE_PRIORITY_TOGGLE } from 'ionic-angular/gestures/gesture-controller';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;


/**
 * Generated class for the DescricaoReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descricao-reserva',
  templateUrl: 'descricao-reserva.html',
})
export class DescricaoReservaPage {

  lat=-15.8216555;
  long=-47.8608168;
  public dados;
  positionSubscription : Subscription;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public ptl : Platform,
     public platform : Platform,
     public launchNavigator: LaunchNavigator,
     public geolocation: Geolocation
    ) {
    this.dados = this.navParams.get("descricao");
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude
      this.long = resp.coords.longitude

     }).catch((error) => {
       console.log('Error getting location', error);
     });

 
  }
  


  ionViewDidLoad() {
   
   
  }
     
   click(){

   
    const options: LaunchNavigatorOptions = {
      start: [this.lat, this.long],
      app: this.launchNavigator.APP.GOOGLE_MAPS,
      transportMode: this.launchNavigator.TRANSPORT_MODE.WALKING,
      appSelection: {
          dialogHeaderText: 'some dialog header',
          cancelButtonText: 'cancel me',
          rememberChoice: {
              enabled: true,
              prompt: {
                  headerText: 'some prompt header',
                  bodyText: 'some prompt body',
                  yesButtonText: 'go for it',
                  noButtonText: 'please no'
              }
          }
      }
  };
    this.launchNavigator.navigate("assejus", options)
    .then(success => console.log('Launched navigator'))
    .catch(error => console.error('Error launching navigator: ' + JSON.stringify(error, null, 2)))
   }
 


  
}

