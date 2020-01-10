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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pacientes: PacienteDTO[] = [];

  medicos: MedicoDTO[] = [];


  consultas: ConsultaDTO[] = [];

  constructor(private pacienteService: PacienteService, private consultaService: ConsultaService, private medicoService: MedicoService, private router: Router) {
   }

  ngOnInit() {


      this.pacienteService.getAll().subscribe(response => {
        this.pacientes = response;
     },
        error => {

        });
    

    
    this.medicoService.getAll().subscribe(response => {
      this.medicos = response;
   },
      error => {

      });


  this.consultaService.getAll().subscribe(response => {
    this.consultas = response;
 },
    error => {

    });
}
    

  cadPaciente() {
    this.router.navigate(['paciente']);
  }

  cadMedico() {
    this.router.navigate(['medico']);
  }

  cadConsulta() {
    this.router.navigate(['consulta']);
  }


}
