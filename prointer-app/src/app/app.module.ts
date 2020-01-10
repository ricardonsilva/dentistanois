import { HomePacienteComponent } from './homepaciente/homepaciente.component';
import { PacienteService } from './services/paciente.service';
import { MedicoService } from './services/medico.service';
import { ConsultaService } from './services/consulta.service';
import { HeaderComponent } from './header/header.component';
import { HomeService } from './services/home.service';
import { UsuarioService } from './services/usuario.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutinhModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MedicoComponent } from './medico/medico.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/oauth.service';
import { StorageService } from './services/storage.service';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MAT_DIALOG_SCROLL_STRATEGY, MatDialogModule, MatAutocompleteModule, MatButtonModule,
  MatButtonToggleModule, MatCheckboxModule, MatCardModule, MatChipsModule, MatDatepickerModule, MatDividerModule, MatAutocomplete,
  MatExpansionModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatTooltipModule, MatToolbarModule, MatTabsModule, MatStepperModule, 
  MatTableModule, MatSortModule, MatSnackBarModule, MatSlideToggleModule, MatSliderModule, MatSidenavModule, MatSelectModule,
  MatRippleModule } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { HomeAuthGuard } from './guard/home.auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MedicoComponent,
    HomePacienteComponent,
    ConsultaComponent,
    HomeComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutinhModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [
    HomeService,
    PacienteService,
    MedicoService,
    ConsultaService,
    AuthService,
    StorageService,
    UsuarioService,
    AuthInterceptorProvider,
    HomeAuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
