import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoDTO } from './../models/medico.dto';
import { HomeService } from './../services/home.service';
import { MedicoService } from './../services/medico.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medico: MedicoDTO = {
    id: null,
    nome: "",
    especialidade: ""
  };

  constructor(private medicoService: MedicoService,  public dialog: MatDialog, private router: Router) {}

  ngOnInit() {}

  cadMedico(medico) {
      this.medicoService.postMedico(this.medico).subscribe(response => {
        this.router.navigate(['home']);
      },
      
      error => {
        console.log('deu ruim');

      });
  }


}

