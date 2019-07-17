import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { LocalService } from '../../sysgen/localservice';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm;

  constructor(private http: LocalService) {
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
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
    this.http.registerUserNow(data).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
