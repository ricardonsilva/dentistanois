import { MedicoDTO } from './../models/medico.dto';
import { API_CONFIG } from './../config/api.config';
import { HomeDTO } from './../models/home.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MedicoService {

    constructor(private http: HttpClient) {}


    public getAll():  Observable<MedicoDTO[]>  {
        return this.http.get<MedicoDTO[]>(`${API_CONFIG.baseUrl}/medico/medicoSearchAll`);
    }


    public postMedico(obj: MedicoDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/medico`, obj, {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}
