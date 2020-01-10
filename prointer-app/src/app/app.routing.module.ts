import { HomePacienteComponent } from './homepaciente/homepaciente.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedicoComponent } from './medico/medico.component';
import { HomeAuthGuard } from './guard/home.auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [HomeAuthGuard] },
    { path: 'pacienteHome', component: HomePacienteComponent },
    { path: 'consulta', component: ConsultaComponent },
    { path: 'medico', component: MedicoComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutinhModule {}
