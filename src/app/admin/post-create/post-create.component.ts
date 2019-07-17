import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LocalService} from '../../sysgen/localservice';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postFrom;
  cats;

  constructor(private http: LocalService, private router: Router) {
  }

  ngOnInit() {
    this.http.getAllCats().subscribe(
      response => {
        if (response.con) {
          this.cats = response.msg;
        }
      },
      error => {
        console.error(error);
      }
    );
    this.postFrom = new FormGroup({
      'cat_id': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'image': new FormControl('', Validators.required),
      'desc': new FormControl('', Validators.required),
    });
  }

  startPost(data) {
    this.http.postCreate(data).subscribe(
      response => {
        if (response.con) {
          console.log(response.msg);
          alert('Post Created!');
          this.router.navigate(['/admin/post/all']);
        } else {
          alert('Post Creation Fail!');
        }
      },
      error => {
        console.error(error);
      }
    );
  }
}

/*
            description: req.body.description
 */
