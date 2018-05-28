import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public dados;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dados = this.navParams.get("descricao");
  }

  ionViewDidLoad() {
    
  }

}
