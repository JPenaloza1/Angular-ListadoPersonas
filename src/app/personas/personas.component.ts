import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../persona.model';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
    private router:Router,
    private personaService:PersonaService
  ){}

  ngOnInit(): void {
    this.personaService.obtenerPersonas()
    .subscribe((personas: Object) => {
      this.personas = personas as Persona[];
      this.personaService.setPersonas(personas as Persona[]);
    });
    console.log("Jijijij" + this.personas);
  }

  agregar() {
    this.router.navigate(["personas/this.agregar"]);
  }

}
