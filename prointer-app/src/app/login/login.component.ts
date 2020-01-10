import { UsuarioService } from './../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/oauth.service';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { OAuthDTO } from '../models/oauth.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credenciais: CredenciaisDTO = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    if (this.authService.isAgenteAuthenticated()) {
      this.router.navigate(['agente']);
    }
  }

  login() {
    this.authService.authenticate(this.credenciais)
      .subscribe(response => {
        this.authService.successfullAuthenticationToken(response);
        this.goCurrentUsuario();
      },
      error => {
        console.log('Erro ao realizar o login do agente.');
      });
  }

  cadastroHome() {
    this.router.navigate(['cadastroHome']);
  }


  private goCurrentUsuario() {
    this.usuarioService.getCurrent()
      .subscribe(usuario => {
        this.authService.successfullAuthenticationUsuario(usuario);
        switch (usuario.tipo) {
          case 'AGENTE':
            this.router.navigate(['home']);
            break;
          case 'PACIENTE':
          this.router.navigate(['pacienteHome']);
          break;
          default:
            console.log('tipo de usuario invalido encontrado ' + usuario.tipo);
            this.router.navigate(['login']);
            break;
        }
      });
  }

}
