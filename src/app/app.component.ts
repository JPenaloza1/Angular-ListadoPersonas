import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';
  
  constructor(private loginService:LoginService) {}
  
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyArV7lH7TdltP1UskDdQ2x4jOdhsFAST2U",
      authDomain: "listado-personas-27d35.firebaseapp.com"
    })
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }

  salir() {
    this.loginService.logout();
  }
}