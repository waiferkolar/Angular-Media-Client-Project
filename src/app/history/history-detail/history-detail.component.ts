import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LocalService} from '../../sysgen/localservice';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent implements OnInit {
  id;
  products;
  grandTotal = 0;

  constructor(private route: ActivatedRoute, private http: LocalService) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.http.getOrderDetailById(this.id).subscribe(
      response => {
        if (response.con) {
          console.log(response.msg);
          this.products = response.msg;
          this.products.forEach((product) => {
            this.grandTotal += product.price * product.__v;
          });
        } else {
          alert(response.msg);
        }
      },
      error => {
        console.error(error);
      }
    );

  }

}
