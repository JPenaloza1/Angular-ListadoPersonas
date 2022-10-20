import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  nombreInput:string = "";
  apellidoInput:string = "";


  constructor(private loggingService:LoggingService,
              private personaService:PersonaService) {
                this.personaService.saludar.subscribe(
                  (indice:number) => alert("El índice es: " + indice)
                );
              }

  agregarPersona() {
    let persona1 = new Persona(
      this.nombreInput, 
      this.apellidoInput);

    // this.loggingService.enviarMensajeAConsola("Eviamos persona: " + persona1.nombre + " " + persona1.apellido);
    // this.personaCreada.emit(persona1);
    this.personaService.agregarPersona(persona1);
  }
}
