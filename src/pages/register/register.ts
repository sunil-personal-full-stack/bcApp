import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
    selector: 'register-user',
    templateUrl: 'register.html'
})

export class RegisterComponent implements OnInit {
    constructor(
        private navCtrl : NavController
    ) { }

    ngOnInit() { }

    gotoLogin(){
        this.navCtrl.setRoot(LoginPage);
    }
}