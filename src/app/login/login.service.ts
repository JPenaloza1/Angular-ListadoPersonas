import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase/auth';

@Injectable()
export class LoginService {
    token:string | null;

    constructor(private router:Router) {}

    login(email:string, password:string) {
        firebase
            .signInWithEmailAndPassword(firebase.getAuth(), email, password)
            .then((userCredential) => {
                userCredential.user.getIdToken().then((token) => {
                    this.token = token;
                    this.router.navigate(["personas"]);
                });
            })
            .catch((error) => {
                const ererorCode = error.code;
                const errorMessage = error.errorMessage;
            })
    }

    getIdToken() {
        return this.token;
    }

    isAutenticado() {
        return this.token != null;
    }

    logout() {
        firebase.signOut(firebase.getAuth()).then(() => {
            this.token = null;
            this.router.navigate(['login']);
        }).catch(error => console.log("error logut: " + error)
        );
    }
}