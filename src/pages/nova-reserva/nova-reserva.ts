import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the NovaReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nova-reserva',
  templateUrl: 'nova-reserva.html',
})
export class NovaReservaPage {
   
   
   public itens = this.navParams.get("item")
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public _http : HttpClient,
     private _loadingCtrl : LoadingController,
     private _alertCtrl : AlertController 
    ) {
  }

  ionViewDidLoad() {

    

    }
  
   
}
