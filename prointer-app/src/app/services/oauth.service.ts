import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { CredenciaisDTO } from '../models/credenciais.dto';
import { OAuthDTO } from '../models/oauth.dto';
import { Observable } from 'rxjs/Observable';
import { API_CONFIG } from '../config/api.config';
import { UsuarioDTO } from '../models/usuario.dto';

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private router: Router,
        private storageService: StorageService) {}

    authenticate(credenciais: CredenciaisDTO): Observable<OAuthDTO> {
        const req = new URLSearchParams();
        req.set('username', credenciais.email);
        req.set('password', credenciais.password);
        req.set('client_id', 'lmedievais-app');
        req.set('grant_type', 'password');

        const headers = new HttpHeaders({
            'Authorization': 'Basic bG1lZGlldmFpcy1hcHA6eXRob3RlaXMtc2VjcmV0',
            'Content-Type': 'application/x-www-form-urlencoded'
        });

        this.storageService.setToken(null);

        return this.http.post<OAuthDTO>(
            `${API_CONFIG.baseUrl}/oauth/token`,
            req.toString(),
            { headers }
        );
    }

    logout() {
        this.storageService.logout();
        this.router.navigate(['login']);
    }

    successfullAuthenticationToken(oauth: OAuthDTO) {
        this.storageService.setToken(oauth);
    }

    successfullAuthenticationUsuario(usuario: UsuarioDTO) {
        this.storageService.setUsuario(usuario);
    }

    isAuthenticated() {
        return this.storageService.getToken() ? true : false;
    }

    isAgenciaAuthenticated() {
        return this.isAuthenticated() && this.storageService.getUsuario().tipo === 'AGENCIA';
    }

    isAgenteAuthenticated() {
        return this.isAuthenticated() && this.storageService.getUsuario().tipo === 'AGENTE';
    }
}
