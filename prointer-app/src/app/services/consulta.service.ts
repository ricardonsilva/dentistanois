import { ConsultaDTO } from './../models/consulta.dto';
import { API_CONFIG } from './../config/api.config';
import { HomeDTO } from './../models/home.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConsultaService {

    constructor(private http: HttpClient) {}


    public getAll():  Observable<ConsultaDTO[]>  {
        return this.http.get<ConsultaDTO[]>(`${API_CONFIG.baseUrl}/consulta/consultaSearchAll`);
    }


    public getMinhasConsultas():  Observable<ConsultaDTO[]>  {
        return this.http.get<ConsultaDTO[]>(`${API_CONFIG.baseUrl}/consulta/minhasConsultas`);
    }

    public postConsulta(obj: ConsultaDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/consulta`, obj, {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}
