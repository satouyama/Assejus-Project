import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { User } from '../../model/usuario';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Md5} from 'ts-md5/dist/md5';
import { ReservaPage } from '../reserva/reserva';
import { Toast } from 'ionic-angular/components/toast/toast';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../../providers/session/session.service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
     ActiveMenu : string;
     LogarForm : FormGroup;
     Usuario = {} as User;
     Data;
  constructor(public navCtrl: NavController,
    public session : SessionService, 
    public toastCtrl : ToastController,
    public _http : HttpClient,
    public formBuilder : FormBuilder,
    public MenuCtrl : MenuController
  ) {
    this.MenuCtrl.enable(false, 'myMenu');
       this.LogarForm = this.formBuilder.group({
         cpf : ['',[Validators.required,Validators.minLength(9)]],
         senha : ['',[Validators.required,Validators.minLength(6)]]
       });
  }

   
  Logar(Usuario : User){
    console.log(Usuario.senha)
    var senha = Md5.hashStr(Usuario.senha);
    var cpf = Usuario.nr_cpf;
    console.log(cpf);
   
     this._http.get<User[]>('http://homologaintranet.assejus.org.br/api/v1/usuario/validar-acesso/'+cpf+'/'+ senha).subscribe((res)=>{

        this.Data = res;
         this.session.createSession(this.Data.dados_usuario.id_usuario,cpf,this.Data.dados_usuario.nm_usuario)
         .then((res)=>{
          this.navCtrl.setRoot(ReservaPage, {data : this.Data.dados_usuario});
          this.toastCtrl.create({
            message: 'Bem vindo ' + this.Data.dados_usuario.nm_completo,
            duration: 2000,
            position: 'top'
          }).present();
         })
         .catch((error)=>{
          this.toastCtrl.create({
            message: 'Serviço indisponível aguarde ...',
            duration: 3000,
            position: 'top'
          }).present();
         })
        
        
       
     },(e)=>{
      this.toastCtrl.create({
        message: 'CPF ou Senha inválidos',
        duration: 3000,
        position: 'top'
      }).present();
      })
  }

   
}
