import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { DescricaoReservaPage } from '../descricao-reserva/descricao-reserva';
import {Storage} from '@ionic/storage';
import { User } from '../../model/usuario';
import { HomePage } from '../home/home';
import { NovaReservaPage } from '../nova-reserva/nova-reserva';
import { ListItemPage } from '../list-item/list-item';
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
  public nome;
  user;
  public reservas 
  public dados;
  public cpf
 
  
  itens : any;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public _http : HttpClient, 
    public menuCtrl : MenuController,
    private _loadingCtrl : LoadingController,
    private _alertCtrl : AlertController,
    private storage : Storage
  ) {
   this.menuCtrl.enable(true, 'myMenu'); 
   console.log(this.user);
  
  }

  
  
  ionViewDidLoad() {
    this.storage.get('data').then((val) => {
      this.user = val;
      
      this.nome = this.user.nome;
      this.cpf = this.user.nr_cpf;
     
      this._http.get<User>('http://homologaintranet.assejus.org.br/api/v1/reserva/buscar-por-cpf/' + this.cpf).subscribe(
        (dados) => {
          this.dados = dados;
         this.reservas = this.dados.data
          
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
        }
      );
 }).catch((e)=>{
    console.log(e);
    loading.dismiss();
    
     
 });
    
    let loading = this._loadingCtrl.create({
      content: 'Aguarde o carregamento'
    });
    loading.present();

  
  
  }

  DescricaoReserva(reserva){
     this.navCtrl.push(DescricaoReservaPage, {descricao : reserva})
   
  }
 
   filterItens(event : any){
 
  
   }
   novaReserva(){
     this.navCtrl.push(ListItemPage);
   }
   
}
