import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { usuario } from '../../model/usuario';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
    public user : usuario = <usuario>{};


   
  constructor(public navCtrl: NavController, 
    public toastCtrl : ToastController,
    public _http : HttpClient
  ) {
       
  }
  Logar(){
    this._http.get("http://homologaintranet.assejus.org.br/api/v1/usuario/validar-acesso/07937776153/25d55ad283aa400af464c76d713c07ad").subscribe(data => {
     console.log(data);
    }, err => {
      console.log(err);
    });
  }

   
}
