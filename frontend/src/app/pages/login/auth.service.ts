import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  mostrarMenuEmitter = new EventEmitter<boolean>();
  userToken: boolean = false;
  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome ==="admin" &&
       usuario.senha === "123"){
        this.usuarioAutenticado =true;
        this.router.navigate(['/projetos']);
        this.mostrarMenuEmitter.emit(true);

        const token = JSON.stringify(this.usuarioAutenticado);
        localStorage.setItem('token', token)
        this.userToken = JSON.parse(localStorage.getItem('token'))

    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);

    }
  }
  usuarioEstaAutenticado(){
    console.log("Usuario--->" + this.usuarioAutenticado);
    if(localStorage.getItem('token')){
      this.usuarioAutenticado = JSON.parse(localStorage.getItem('token'));
      console.log("Usuario--->" + this.usuarioAutenticado);
      return true;
    }
    return false;
  }

}
