import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListItemPage } from '../list-item/list-item';
import { NovaReservaPage } from '../nova-reserva/nova-reserva';
import { ReservaPage } from '../reserva/reserva';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  public churrasqueiras = this.navParams.get("item");
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.churrasqueiras);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
 
   dismiss(){
     this.navCtrl.push(ReservaPage)
   }

   novaReserva(churrasqueiras){
        this.navCtrl.push(NovaReservaPage, {item : churrasqueiras});
   }
}
