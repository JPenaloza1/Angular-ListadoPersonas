import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor(private httpClient:HttpClient){}

    //Guardar personas
    guardarPersonas(personas:Persona[]) {
        this.httpClient.put("https://listado-personas-27d35-default-rtdb.firebaseio.com/.json", 
                              personas).subscribe(
                                response => {
                                    console.log("Resultado de guardar Personas: " + response);
                                },
                                error => console.log("Error al guardar las Personas: " + error)
                              );
    }
}