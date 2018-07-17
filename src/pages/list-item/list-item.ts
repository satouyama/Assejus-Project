import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ActionSheetController, ModalController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ModalPage } from '../modal/modal';

/**
 * Generated class for the ListItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-item',
  templateUrl: 'list-item.html',
})
export class ListItemPage {
  
  public item;
  public itens = ["Churrasqueira",];
  public churrasqueiras;
  public salaoFestas;
  public QuadraPoliesportiva;
  public CampoDeFutebol;
  public QuadraDeAreia;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _http : HttpClient,
    private _loadingCtrl : LoadingController,
    private _alertCtrl : AlertController ,
    public actionSheetCtrl: ActionSheetController,
    public modalCtrl: ModalController
   ) {
 }


 ionViewDidLoad() {

  let loading = this._loadingCtrl.create({
    content: 'Aguarde o carregamento'
  });

  this._http.get('http://homologaintranet.assejus.org.br/api/v1/tipo-item/montar-menu-lateral-app/').subscribe(
    (dados) => {
       this.item = dados;
       this.churrasqueiras = this.item.data.Churrasqueiras.itens_locaveis;
       this.salaoFestas =  this.item.data.SalaoDeFestas.itens_locaveis;
       this.QuadraPoliesportiva =this.item.data.QuadraPoliesportiva.itens_locaveis;
       this.CampoDeFutebol = this.item.data.CampoDeFutebol.itens_locaveis;
       this.QuadraDeAreia = this.item.data.QuadraDeAreia.itens_locaveis;
      loading.dismiss();
    },
    (error) => {
        loading.dismiss();

      this._alertCtrl.create({
        title : "Falha na conexão",
        subTitle : 'Não foi possivel carregar a lista tente novamente mais tarde',
         buttons : [
           {text : 'Ok'}
          ]
      }).present();
    });
  }
 
  modalChurrasqueira() {
    const modal = this.modalCtrl.create(ModalPage.name, {item: this.churrasqueiras});
    modal.present();
  }

  modalSalaoFestas() {
    const modal = this.modalCtrl.create(ModalPage.name, {item : this.salaoFestas});
    modal.present();
  }
  modalQuadraPoliesportiva(){
    const modal = this.modalCtrl.create(ModalPage.name, {item : this.QuadraPoliesportiva});
    modal.present();
  }

  modalCampoFutbol(){
    const modal = this.modalCtrl.create(ModalPage.name, {item : this.CampoDeFutebol});
    modal.present();
  }
  modalQuadraAreia(){
    const modal = this.modalCtrl.create(ModalPage.name, {item : this.QuadraDeAreia});
    modal.present();
  }


}
