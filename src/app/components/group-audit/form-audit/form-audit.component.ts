import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatSort, MatPaginator} from '@angular/material';
import {FieldAudit} from '../field-audit';
import {AuditService} from '../../../services/audit.service';
import {error} from 'util';

@Component({
  selector: 'app-form-audit',
  templateUrl: './form-audit.component.html',
  styleUrls: ['./form-audit.component.css'],
  providers: [AuditService]
})
export class FormAuditComponent implements OnInit {

  dataSource: MatTableDataSource<FieldAudit> = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  public displayedColumns =  ['fieldDate', 'fieldHost', 'fieldEvent', 'fieldComent', 'fieldResult'];

  constructor(private auditService: AuditService) {
  }

  ngOnInit() {
    this.auditService.getAudit().subscribe(tmp => {
        this.dataSource.data = tmp;
        console.log(tmp);
      },
      error1 => console.log('ERROR IS', error1));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filterString(field: string, filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    for (const column of this.displayedColumns) {
      if (field === column) {
        this.dataSource.filter = filterValue;
      }
    }
  }
}
