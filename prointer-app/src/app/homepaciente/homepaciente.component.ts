import { ConsultaService } from './../services/consulta.service';
import { ConsultaDTO } from './../models/consulta.dto';
import { MedicoService } from './../services/medico.service';
import { MedicoDTO } from './../models/medico.dto';
import { PacienteService } from './../services/paciente.service';
import { PacienteDTO } from './../models/paciente.dto';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuartoService } from '../services/quarto.service';

@Component({
  selector: 'app-homepaciente',
  templateUrl: './homepaciente.component.html',
  styleUrls: ['./homepaciente.component.css']
})
export class HomePacienteComponent implements OnInit {

  consultas: ConsultaDTO[] = [];


  constructor(private consultaService: ConsultaService, private router: Router) {
   }

  ngOnInit() {


  this.consultaService.getMinhasConsultas().subscribe(response => {
    this.consultas = response;
 },
    error => {

    });
}
    
  cadConsulta() {
    this.router.navigate(['consulta']);
  }


}
