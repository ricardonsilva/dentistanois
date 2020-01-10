import { API_CONFIG } from './../config/api.config';
import { PacienteDTO } from './../models/paciente.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

    constructor(private http: HttpClient) {}

    public getCurrent(): Observable<PacienteDTO> {
        return this.http.get<PacienteDTO>(
            `${API_CONFIG.baseUrl}/agente/self`
        );
    }

    public postHome(obj: PacienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/agente`, obj, {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}
