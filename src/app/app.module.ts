import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonaComponent } from './personas/persona/persona.component';
import { FormularioComponent } from './personas/formulario/formulario.component';
import { LoggingService } from './LoggingService.service';
import { PersonaService } from './persona.service';
import { PersonasComponent } from './personas/personas.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FormularioComponent,
    PersonasComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoggingService, PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
