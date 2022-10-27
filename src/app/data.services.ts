import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { LoginService } from './login/login.service';
import { Persona } from './persona.model';

@Injectable()
export class DataServices {
    constructor(
        private httpClient:HttpClient,
        private loginService:LoginService
        ){}

    cargarPersonas() {
        const token = this.loginService.getIdToken();
        return this.httpClient.get("https://listado-personas-27d35-default-rtdb.firebaseio.com/datos.json?auth=" + token);
    }
                                    
    //Guardar personas
    guardarPersonas(personas:Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put("https://listado-personas-27d35-default-rtdb.firebaseio.com/datos.json?auth=" + token, 
                              personas).subscribe(
                                response => {
                                    console.log("Resultado de guardar Personas: " + response);
                                },
                                error => console.log("Error al guardar las Personas: " + error)
                              );
    }

    modificarPersona(index:number, persona:Persona) {
        console.log("Indice: " + index);
        const token = this.loginService.getIdToken();
        let url:string;
        url = "https://listado-personas-27d35-default-rtdb.firebaseio.com/datos/" + index + ".json?auth=" + token;
        this.httpClient.put(url, persona)
        .subscribe(
                response => console.log("resultado modificar Persona: " + response)
            ,   error => console.log("Error en modificar Persona: " + error)
        )
    }

    eliminarPersona(index:number) {
        const token = this.loginService.getIdToken();
        let url:string;
        url = "https://listado-personas-27d35-default-rtdb.firebaseio.com/datos" + index + ".json?auth=" + token;
        this.httpClient.delete(url).subscribe(
            response => console.log("resultado eliminar Persona: " + response)
            ,
        error => console.log("Error en eliminar Persona: " + error)
        )
    }
}