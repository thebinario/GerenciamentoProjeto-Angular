import { AuthService } from './pages/login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webSite';

  mostrarMenu: Boolean = false;

  constructor(private authService: AuthService){}


  ngOnInit(){
    this.authService.mostrarMenuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );
    if(this.authService.usuarioEstaAutenticado()){
      this.mostrarMenu = true;
    }


  }
  sair(){
    localStorage.removeItem('token');

    if(this.authService.usuarioEstaAutenticado){
      this.authService.mostrarMenuEmitter.subscribe(
        mostrar => this.mostrarMenu = mostrar
      );
    }
  }
}


