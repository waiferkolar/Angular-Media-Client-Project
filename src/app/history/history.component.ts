import {Component, OnInit} from '@angular/core';
import {LocalService} from '../sysgen/localservice';

@Component({
  selector: 'app-history',
  template: `
    <router-outlet></router-outlet>`
})
export class HistoryComponent implements OnInit {


  constructor(private http: LocalService) {

  }

  ngOnInit() {


  }

}
