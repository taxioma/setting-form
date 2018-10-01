import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatTableDataSource} from '@angular/material';
import {FormSettingsComponent} from '../../group-settings/form-settings/form-settings.component';
import {FieldSettings} from '../../group-settings/field-settings';
import {SettingsService} from '../../../services/settings.service';

@Component({
  selector: 'app-dialog-message',
  templateUrl: './dialog-message.component.html',
  styleUrls: ['./dialog-message.component.css']
})
export class DialogMessageComponent implements OnInit {

  constructor(public dialogRefMessage: MatDialogRef<FormSettingsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private settingsService: SettingsService ) { }

  dataSource: MatTableDataSource<FieldSettings> = new MatTableDataSource();

  ngOnInit() {
  }
  onNoClick(): boolean {
    this.dialogRefMessage.close();
    return false;
  }
  delete(setting: FieldSettings): boolean {
    this.dataSource.data = this.dataSource.data.filter(s => s !== setting);
    this.settingsService.deleteSettings(setting).subscribe(res => {
      console.log(res);
    });
    return true;
  }

}
