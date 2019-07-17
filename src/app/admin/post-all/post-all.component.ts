import {Component, OnInit} from '@angular/core';
import {LocalService} from '../../sysgen/localservice';

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css']
})
export class PostAllComponent implements OnInit {
  products;

  constructor(private http: LocalService) {

  }

  ngOnInit() {
    this.http.getPaginatePost(1, 50).subscribe(
      response => {
        if (response.con) {
          console.log(response);
          this.products = response.msg;
        } else {
          console.log(response);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
