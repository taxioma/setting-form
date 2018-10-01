import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {User} from '../auth/User';

@Injectable()
export class AuthorizationService {
  private defaultUrl = 'api/users';

  constructor(private http: HttpClient) {
  }

  public login(tmp: any): Observable<User> {
    return this.http.get<User>(this.defaultUrl + `?login=${tmp.login}&password=${tmp.pass}`);
  }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.defaultUrl);
  }

}
