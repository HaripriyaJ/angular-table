import { Component } from '@angular/core';
import { IColumnConfig } from 'src/interfaces/tableConfig';
import { AppTableService } from './app-table/app-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public tableColumnConfig: IColumnConfig[] = [];
  public tableData: any[] = [];

  constructor(private tableService: AppTableService) {
    this.tableService.getTableConfig().subscribe((data: any) => this.tableColumnConfig = data.columns);
    this.tableService.getTableData().subscribe((data: any) => this.tableData = data.data);
  }

  public updateTableColumnConfig(config: IColumnConfig) {
    this.tableColumnConfig = this.tableColumnConfig.map(column => column.data === config.data ? config : column);
  }
}
