import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuartoDTO } from '../models/quarto.dto';

@Injectable()
export class QuartoService {

    constructor(private http: HttpClient) {}

    public postQuarto(obj: QuartoDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/hoteis/self/quartos`, obj, {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    public getAll():  Observable<QuartoDTO[]>  {
        return this.http.get<QuartoDTO[]>(`${API_CONFIG.baseUrl}/hoteis/self/quartos`);
    }

    public search(cidade: string, minValor: number, maxValor: number, page: number = 0, linesPerPage: number = 24) {
        return this.http.get(`${API_CONFIG.baseUrl}/hoteis/quartos/search?
            cidade=${cidade}&minValor=${minValor}&maxValor=${maxValor}&page=${page}&linesPerPage=${linesPerPage}&direction=ASC`);
    }
}
