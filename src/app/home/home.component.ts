import { Component, OnInit } from '@angular/core';
import { LocalService } from '../sysgen/localservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cats;
  loadShow = false;
  link = "";
  constructor(private http: LocalService) {
    this.link = http.BASE_URL+"imgs/";
  }

  ngOnInit() {
    this.loadShow = true;
    this.http.getAllCats().subscribe(
      response => {
        if (response.con) {
          console.log(response);
          this.cats = response.msg;
          this.loadShow = false;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
