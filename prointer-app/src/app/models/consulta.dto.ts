import { MedicoDTO } from './medico.dto';
import { PacienteDTO } from './paciente.dto';
export interface ConsultaDTO {
    id: number;
    dataconsulta: Date;
    hora: String;
    paciente: PacienteDTO;
    medico: MedicoDTO;
}
