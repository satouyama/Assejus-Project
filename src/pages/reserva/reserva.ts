import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DescricaoReservaPage } from '../descricao-reserva/descricao-reserva';

/**
 * Generated class for the ReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {
   
   data = this.navParams.get('data');
   reservas ;
   public dados;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public _http : HttpClient, 
    public menuCtrl : MenuController,
    private _loadingCtrl : LoadingController,
    private _alertCtrl : AlertController
  ) {
   this.menuCtrl.enable(true, 'myMenu');
   
  }

  ionViewDidLoad() {
    let loading = this._loadingCtrl.create({
      content: 'Aguarde o carregamento'
    });
    loading.present();

    this._http.get('http://homologaintranet.assejus.org.br/api/v1/reserva/buscar-por-cpf/' + this.data.nr_cpf).subscribe(
      (dados) => {
        this.dados = dados;
        this.reservas = this.dados.data;
        loading.dismiss();
      },
      (error : HttpErrorResponse) => {
          loading.dismiss();

        this._alertCtrl.create({
          title : "Falha na conexão",
          subTitle : 'Não foi possivel carregar a lista tente novamente mais tarde',
           buttons : [
             {text : 'Ok'}
            ]
        }).present();
      }
    );
  
  }

  DescricaoReserva(reserva){
     this.navCtrl.push(DescricaoReservaPage, {descricao : reserva})
   
  }

}
