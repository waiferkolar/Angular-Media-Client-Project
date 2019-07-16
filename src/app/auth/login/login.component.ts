import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalService} from '../../sysgen/localservice';
import {Loki} from '../../sysgen/loki';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;

  constructor(private http: LocalService) {

  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
  }

  startLogin(data) {
    this.http.loginUserNow(data).subscribe(
      response => {
        if (response.con) {
          Loki.save(response.token);
          this.http.changeAuth(true);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
