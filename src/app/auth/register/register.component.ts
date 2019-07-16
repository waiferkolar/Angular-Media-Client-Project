import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor() {
  }

  ngOnInit() {
    this.registerForm = new FormControl({
      'name': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4)
      ])),
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
    });
  }

  startRegister(data) {
    console.log(data);
  }

}
