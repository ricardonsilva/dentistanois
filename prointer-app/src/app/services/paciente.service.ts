import { PacienteDTO } from './../models/paciente.dto';
import { API_CONFIG } from './../config/api.config';
import { HomeDTO } from './../models/home.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PacienteService {

    constructor(private http: HttpClient) {}


    public getAll():  Observable<PacienteDTO[]>  {
        return this.http.get<PacienteDTO[]>(`${API_CONFIG.baseUrl}/paciente/pacienteSearchAll`);
    }

    

    public postPaciente(obj: PacienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/paciente`, obj, {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}
