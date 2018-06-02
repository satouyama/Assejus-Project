import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import { User } from '../../model/usuario';
/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionService {

  constructor(public http: HttpClient, public storage : Storage) {
    
  }
  
  createSession(id : number ,cpf :string,nome : string){
     let usuarioStorage = {
      id : id, 
      nr_cpf : cpf,
      nome : nome
     }
    return this.storage.set('data', usuarioStorage);
  }

  clearAll(){
   return this.storage.clear()
  }
}
