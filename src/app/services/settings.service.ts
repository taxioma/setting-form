import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {FieldSettings} from '../components/group-settings/field-settings';
import {MessageService} from './message.service';
import {tap} from 'rxjs/operators';

@Injectable()
export class SettingsService {

  private defaultUrl = 'api/settings';


  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  public getSettings(): Observable<FieldSettings[]> {
    this.messageService.add('Настройки выгружены');
    return this.http.get<FieldSettings[]>(this.defaultUrl);
  }

  public addSettings(setting: FieldSettings): Observable<FieldSettings> {
    return this.http.post<FieldSettings>(this.defaultUrl, setting).pipe(
      tap(_ => this.messageService.add(`Добавлена настройка ${setting.fieldName}`))
    );
  }

  public deleteSettings(setting: FieldSettings): Observable<FieldSettings> {
    return this.http.delete<FieldSettings>(this.defaultUrl + '/' + setting.id).pipe(
     tap(_ => this.messageService.add(`Удалена настройка ${setting.fieldName}`))
    );
  }

  public editSettings(setting: FieldSettings): Observable<FieldSettings> {
    return this.http.post<FieldSettings>(this.defaultUrl, setting).pipe(
      tap(_ => this.messageService.add(`Изменена настройка ${setting.fieldName}`))
    );

  }
}
