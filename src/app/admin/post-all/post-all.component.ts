import {Component, OnInit} from '@angular/core';
import {LocalService} from '../../sysgen/localservice';

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css']
})
export class PostAllComponent implements OnInit {
  products;
  pages;
  page;

  constructor(private http: LocalService) {

  }

  ngOnInit() {
    this.pageLoad(1);
  }

  reload(pNum) {
    let destPage = this.page + pNum;
    if (destPage <= this.pages && destPage >= 1) {
      this.pageLoad(destPage);
    }
  }

  pageLoad(start) {
    this.http.getPaginatePost(start, 30).subscribe(
      response => {
        if (response.con) {
          console.log(response.msg);
          this.products = response.msg.docs;
          this.pages = response.msg.pages;
          this.page = response.msg.page;
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
