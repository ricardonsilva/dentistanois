import { Observable } from 'rxjs/Observable';
import { MedicoDTO } from './../models/medico.dto';
import { MedicoService } from './../services/medico.service';
import { PacienteService } from './../services/paciente.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultaDTO } from './../models/consulta.dto';
import { HomeService } from './../services/home.service';
import { ConsultaService } from './../services/consulta.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { PacienteDTO } from '../models/paciente.dto';
import { FormControl } from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {


  consulta: ConsultaDTO = {
    id: null,
    dataconsulta: null,
    hora: "",
    paciente: null,
    medico: null
  };

  paciente: PacienteDTO;

  medicos: MedicoDTO[] = [];

  constructor(private consultaService: ConsultaService, private pacienteService: PacienteService, 
    private medicoService: MedicoService,  public dialog: MatDialog, private router: Router) {}

  ngOnInit() {

       
  this.medicoService.getAll().subscribe(response => {
    this.medicos = response;
 },
    error => {

    });


  }


  cadConsulta(consulta) {
      this.consultaService.postConsulta(this.consulta).subscribe(response => {
        this.router.navigate(['pacienteHome']);
      },
      
      error => {
        console.log('deu ruim');

      });
  }


}

