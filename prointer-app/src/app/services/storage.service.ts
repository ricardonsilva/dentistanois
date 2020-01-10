import { Injectable } from '@angular/core';
import { OAuthDTO } from '../models/oauth.dto';
import { STORAGE_KEYS } from '../config/storage_keys.config';
import { UsuarioDTO } from '../models/usuario.dto';

@Injectable()
export class StorageService {

    constructor() {}

    getToken(): OAuthDTO {
        const oauth = localStorage.getItem(STORAGE_KEYS.oauth);
        return oauth != null ? JSON.parse(oauth) : null;
    }

    setToken(oauth: OAuthDTO) {
        if (oauth == null) {
            localStorage.removeItem(STORAGE_KEYS.oauth);
        } else {
            localStorage.setItem(STORAGE_KEYS.oauth, JSON.stringify(oauth));
        }
    }

    getUsuario(): UsuarioDTO {
        const usuario = localStorage.getItem(STORAGE_KEYS.usuario);
        return usuario != null ? JSON.parse(usuario) : null;
    }

    setUsuario(usuario: UsuarioDTO) {
        if (usuario == null) {
            localStorage.removeItem(STORAGE_KEYS.usuario);
        } else {
            localStorage.setItem(STORAGE_KEYS.usuario, JSON.stringify(usuario));
        }
    }

    logout() {
        this.setToken(null);
        this.setUsuario(null);
    }
}
