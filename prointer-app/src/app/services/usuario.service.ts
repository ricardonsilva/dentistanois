import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { UsuarioDTO } from './../models/usuario.dto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) {}

    public getCurrent(): Observable<UsuarioDTO> {
        return this.http.get<UsuarioDTO>(
            `${API_CONFIG.baseUrl}/usuarios/self`
        );
    }

    public ativar(token: string) {
        return this.http.get(
            `${API_CONFIG.baseUrl}/usuarios/ativar?token=${token}`
        );
    }
}
