import {Component, OnInit, Inject} from '@angular/core';
import {FormSettingsComponent} from '../../group-settings/form-settings/form-settings.component';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatTableDataSource} from '@angular/material';
import {FieldSettings} from '../../group-settings/field-settings';
import {SettingsService} from '../../../services/settings.service';
import {Observable} from 'rxjs/Observable';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {
  tmpSetting = {id: '', fieldName: '', fieldType: 'string', fieldValue: ''};
  private setting;
  settingForm: FormGroup;
  settingsTypes = ['string', 'number', 'Date'];
  constructor(public dialogRef: MatDialogRef<FormSettingsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.settingForm = new FormGroup({
      'name': new FormControl(this.tmpSetting.fieldName, [ // что должно быть в аргументе?
         Validators.required
      ]),
      'value': new FormControl(this.tmpSetting.fieldValue, [
        Validators.required,
        // Validators. - как указать тип
      ]),
      'type': new FormControl(this.tmpSetting.fieldType, [
       Validators.required
      ])
    });
  }

  get name() {
    return this.settingForm.get('name');
  }

  get type() {
    return this.settingForm.get('type');
  }

  get value() {
    return this.settingForm.get('value');
  }
/*
  onNoClick(): void {
    this.dialogRef.close();
  }
*/
  add(name: string, value: any, type: string): boolean {
    this.setting = new FieldSettings;
    const mx = 1;
    const mn = 18;
    const rand = Math.floor(Math.random() * (mx - mn + 1)) + mn;
    this.setting.id = rand; // выгрузка из базы + 1 ???
    this.setting.fieldName = name;
    this.setting.fieldValue = value;
    this.setting.fieldType = type;
    if (!name || !value || !type) {
      return;
    }
    this.settingsService.addSettings(this.setting).subscribe(set => {
      console.log(`${set.fieldName} element is added`);
    });
    this.dialogRef.close(true);
  }

  edit(name: string, value: any, type: string, id: number): Observable<FieldSettings> {
    this.setting = new FieldSettings;
    this.setting.id = id;
    this.setting.fieldName = name;
    this.setting.fieldValue = value;
    this.setting.fieldType = type;
    if (!name || !value || !type) {
      return;
    }
    this.settingsService.editSettings(this.setting).subscribe(set => {
      console.log(`${set.fieldName} element is edited`);
    });
    this.dialogRef.close(true);
  }

}
