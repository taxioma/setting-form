import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {FieldSettings} from '../field-settings';
import {SettingsService} from '../../../services/settings.service';
import {MatDialog} from '@angular/material';
import {DialogFormComponent} from '../../dialogs/dialog-form/dialog-form.component';
import {MessageService} from '../../../services/message.service';
import {DialogMessageComponent} from '../../dialogs/dialog-message/dialog-message.component';

@Component({
  selector: 'app-form-settings',
  templateUrl: './form-settings.component.html',
  styleUrls: ['./form-settings.component.css']
})
export class FormSettingsComponent implements OnInit {
  dataSource: MatTableDataSource<FieldSettings> = new MatTableDataSource();
  public displayedColumns = ['fieldName', 'fieldValue', 'fieldType', 'button'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  constructor(private settingsService: SettingsService, public dialog: MatDialog, public dialogMessage: MatDialog) {
  }

  ngOnInit() {
    this.settingsService.getSettings().subscribe(tmp => {
        this.dataSource.data = tmp;
        console.log(tmp);
      },
      error1 => console.log('ERRORR: ', error1));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;


  }

  openDialogForm(flag: boolean, element: FieldSettings) {
    const dialogRef = this.dialog.open(DialogFormComponent, {
      height: '450px',
      minWidth: '350px',
      data: {flag: flag, element: element}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
                   this.settingsService.getSettings().subscribe(temp => {
                this.dataSource.data = temp;
              },
              error1 => console.log('ERRORR: ', error1));
          } else {
        console.log('Element dont added/changed');
      }
    });
  }
  openDialogMessage(element) {
    const dialogRefMessage = this.dialogMessage.open(DialogMessageComponent, {
      height: '250px',
      minWidth: '500px',
      data: {name: element.fieldName, id: element.id}
    });
    dialogRefMessage.afterClosed().subscribe(result => {
      if (result) {
        this.settingsService.deleteSettings(element).subscribe(tmp => {
            console.log(`The element ${tmp} is deleted`);
            this.settingsService.getSettings().subscribe(temp => {
                this.dataSource.data = temp;
                console.log(temp);
              },
              error1 => console.log('ERRORR: ', error1));
          },
          error1 => console.log('ERRORR: ', error1));
      }      else {
        console.log('Not deleted');
      }
    });
  }

}
