import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { IColumnConfig } from 'src/interfaces/tableConfig';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class AppTableComponent implements OnChanges {
  @Input('tableColumnConfig') tableColumnConfig: IColumnConfig[] = [];
  @Input('tableData') tableData: any[] = [];
  @Output() changeTableConfig: EventEmitter<IColumnConfig> = new EventEmitter();

  public tableColumns: {
    [index: string]: any;
    leftColumns: IColumnConfig[];
    rightColumns: IColumnConfig[];
    scrollableColumns: IColumnConfig[];
  } = {
    leftColumns: [],
    rightColumns: [],
    scrollableColumns: [],
  };

  public noResults: boolean = true;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    // Display table if data is present
    if (this.tableColumnConfig.length && this.tableData.length) {
      this.noResults = false;
      this.tableColumns = {
        leftColumns: this.getPinnedColumns('left'),
        rightColumns: this.getPinnedColumns('right'),
        scrollableColumns: this.getPinnedColumns('none'),
      };
    } else this.noResults = true;
  }

  // Return pinned columns in order of their pinning
  public getPinnedColumns(
    direction: 'left' | 'right' | 'none'
  ): IColumnConfig[] {
    return this.tableColumnConfig
      .filter((col) => col.pinColumn === direction)
      .sort((a, b) => a.pinOrder - b.pinOrder);
  }

  // Style columns
  public columnStyle(columnWidth: any): any {
    return columnWidth
      ? { 'min-width': columnWidth + 'px' }
      : { width: this.getAutoColumnWidth('none'), 'min-width': '200px' };
  }

  // Function to apply equal width to each column with no predefined width
  private getAutoColumnWidth(direction: 'left' | 'right' | 'none'): string {
    return `${
      100 /
      this.tableColumns[
        direction === 'none' ? 'scrollableColumns' : `${direction}Columns`
      ].filter((col: IColumnConfig) => !col?.columnWidth).length
    }%`;
  }

  public handleColumConfigChange(config: IColumnConfig) {
    let formattedConfig: IColumnConfig = config;
    // Add or remove pinOrder
    config.pinColumn === 'none'
      ? delete formattedConfig.pinOrder
      : (formattedConfig = {
          ...config,
          pinOrder: this.tableColumns[`${config.pinColumn}Columns`].length + 1,
        });
    this.changeTableConfig.emit(formattedConfig);
  }
}
