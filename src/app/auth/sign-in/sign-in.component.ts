import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthorizationService} from '../../services/authorization.service';
import {first, tap} from 'rxjs/operators';
import {AuthRoutingModule} from '../auth-routing.module';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {User} from '../User';
import {MatTableDataSource} from '@angular/material';
import {isSuccess} from '@angular/http/src/http_utils';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [AuthorizationService]
})
export class SignInComponent implements OnInit {
  tmpLogin = {id: '', login: '', pass: ''};
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  isSuccess = true;
  protected result: boolean;


  constructor(private  authService: AuthorizationService, private router: Router) {
  }

  ngOnInit() {
    this.authService.getUsers().subscribe(tmp => {
        this.dataSource.data = tmp;
       // console.log(tmp);
      },
      error1 => console.log('ERROR IS', error1));
  }


  public login() {
    this.authService.login(this.tmpLogin).subscribe( res => {
      if (Object.keys(res).length == 1) {
        this.router.navigateByUrl('/home');
        console.log('Sign-in is success');
        console.log(res);
      } else {
        this.isSuccess = false;
        console.log('Sign-in is wrong');
        console.log(res);
      }
    });
  }

}

