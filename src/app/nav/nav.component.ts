import {Component, OnInit} from '@angular/core';
import {LocalService} from '../sysgen/localservice';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuth;

  constructor(private http: LocalService) {
  }

  ngOnInit() {
    this.http.authBool.subscribe(
      response => {
        this.isAuth = response;
      }
    );
  }

}
