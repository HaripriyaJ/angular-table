import { Component, OnInit } from '@angular/core';
import { IColumnConfig } from 'src/interfaces/tableConfig';
import { AppTableService } from './app-table/app-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public tableConfig: IColumnConfig[] = [];
  public tableData: any[] = [];

  constructor(private tableService: AppTableService) {
    this.tableService.getTableConfig().subscribe((data: any) => this.tableConfig = data.columns);
    this.tableService.getTableData().subscribe((data: any) => this.tableData = data.data);
  }

  ngOnInit(): void {
    console.log(this.tableConfig, this.tableData);
  }
}
