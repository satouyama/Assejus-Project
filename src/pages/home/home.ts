import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../model/usuario';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Md5} from 'ts-md5/dist/md5';
import { ReservaPage } from '../reserva/reserva';
import { Toast } from 'ionic-angular/components/toast/toast';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    
     Usuario = {} as User;
     Data;
  constructor(public navCtrl: NavController, 
    public toastCtrl : ToastController,
    public _http : HttpClient
  ) {
       
  }

  
  Logar(Usuario : User){
    var senha = Md5.hashStr('12345678');
    var cpf = '07937776153';
     this._http.get<User[]>('http://homologaintranet.assejus.org.br/api/v1/usuario/validar-acesso/'+cpf+'/'+ senha).subscribe((res)=>{
        this.Data = res;
         this.navCtrl.setRoot(ReservaPage, {data : this.Data.dados_usuario});
        this.toastCtrl.create({
          message: 'Bem vindo ' + this.Data.dados_usuario.nm_completo,
          duration: 2000,
          position: 'top'
        }).present();
       
     },(e)=>{
      this.toastCtrl.create({
        message: 'CPF ou Senha inválidos',
        duration: 3000,
        position: 'top'
      }).present();
      })
  }

   
}
