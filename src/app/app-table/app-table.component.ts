import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { IColumnConfig } from 'src/interfaces/tableConfig';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppTableComponent implements OnChanges {

  @Input("tableConfig") tableConfig: IColumnConfig[] = [];
  @Input("tableData") tableData: any[] = [];

  public scrollableColumns: IColumnConfig[] = [];
  public leftPinnedColumns: IColumnConfig[] = [];
  public rightPinnedColumns: IColumnConfig[] = [];
  public noResults: boolean = true;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // Display table if data is present
    if (this.tableConfig.length && this.tableData.length) {
      this.noResults = false;
      this.scrollableColumns = this.getPinnedColumns('none');
      this.leftPinnedColumns = this.getPinnedColumns('left');
      this.rightPinnedColumns = this.getPinnedColumns('right');
    }
    else this.noResults = true;
  }

  public getPinnedColumns(direction: "left" | "right" | "none") {
    return this.tableConfig.filter(col => col.pinColumn === direction);
  }
}
