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
  adminCatUrl = this.BASE_URL + 'admin/cat/all';
  adminGalleryUrlAll = this.BASE_URL + 'admin/gallery/all';
  adminImageUploadUrl = this.BASE_URL + 'admin/image/upload';
  adminPostPaginateUrl = this.BASE_URL + 'admin/product/paginate/';
  adminPostCreateUrl = this.BASE_URL + 'admin/product/create';
  registerUserUrl = this.BASE_URL + 'user/api/register';
  orderUploadUrl = this.BASE_URL + 'user/order';
  hisotryAllUrl = this.BASE_URL + 'user/order/history';
  historyDetailUrl = this.BASE_URL + 'user/order/detail/';


  isAuth = new Subject<boolean>();
  authBool = this.isAuth.asObservable();

  isCartChange = new Subject<boolean>();
  cartChangeBool = this.isCartChange.asObservable();

  constructor(private http: HttpClient) {
  }


  changeAuth(val: boolean) {
    this.isAuth.next(val);
  }

  cartChange(val: boolean) {
    this.isCartChange.next(val);
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

  registerUserNow(data) {
    return this.http.post(this.registerUserUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getAllAdminCat() {
    return this.http.get(this.adminCatUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getAllAdminGallery() {
    return this.http.get(this.adminGalleryUrlAll).pipe(
      map(
        (response: any) => response
      )
    );
  }

  uploadImage(data) {
    return this.http.post(this.adminImageUploadUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getPaginatePost(start, end) {
    const link = this.adminPostPaginateUrl + start + '/' + end;
    return this.http.get(link).pipe(
      map(
        (response: any) => response
      )
    );
  }

  postCreate(data) {
    return this.http.post(this.adminPostCreateUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  postOrder(data) {
    return this.http.post(this.orderUploadUrl, data).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getAllHistory() {
    return this.http.get(this.hisotryAllUrl).pipe(
      map(
        (response: any) => response
      )
    );
  }

  getOrderDetailById(id) {
    const link = this.historyDetailUrl + id;
    return this.http.get(link).pipe(
      map(
        (response: any) => response
      )
    );
  }

}
