import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FieldAudit} from '../components/group-audit/field-audit';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuditService {

  private defaultUrl = 'api/servers';

  constructor(private http: HttpClient) {
  }

  public getAudit(): Observable<FieldAudit[]> {
    return this.http.get<FieldAudit[]>(this.defaultUrl);
  }
}
