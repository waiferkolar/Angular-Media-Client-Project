import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LocalService {

  BASE_URL = 'http://localhost:3000/';
  catUrl = this.BASE_URL + 'cats';
  detailUrl = this.BASE_URL + 'cat/';
  loginUrl = this.BASE_URL + 'user/api/login';

  isAuth = new Subject<boolean>();
  authBool = this.isAuth.asObservable();

  constructor(private http: HttpClient) {
  }

  changeAuth(val: boolean) {
    this.isAuth.next(val);
  }

  getAllCats() {
    return this.http.get(this.catUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getCatProduct(id) {
    const catProductUrl = this.detailUrl + id;
    return this.http.get(catProductUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  loginUserNow(data) {
    return this.http.post(this.loginUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }


}
