import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IColumnConfig } from 'src/interfaces/tableConfig';
import { AppTableService } from './app-table/app-table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public tableColumnConfig: IColumnConfig[] = [];
  public tableData: any[] = [];
  
  public configSubscription!: Subscription;
  public dataSubscription!: Subscription;

  constructor(private tableService: AppTableService) {
    this.configSubscription = this.tableService
      .getTableConfig()
      .subscribe((data: any) => (this.tableColumnConfig = data.columns));
    this.dataSubscription = this.tableService
      .getTableData()
      .subscribe((data: any) => (this.tableData = data.data));
  }

  public updateTableColumnConfig(config: IColumnConfig) {
    this.tableColumnConfig = this.tableColumnConfig.map((column) =>
      column.data === config.data ? config : column
    );
  }

  ngOnDestroy(): void {
    this.configSubscription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }
}
