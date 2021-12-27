import { Component, Input, OnInit } from '@angular/core';
import { IColumnConfig } from 'src/interfaces/tableConfig';

@Component({
  selector: 'app-table',
  templateUrl: './app-table.component.html',
  styleUrls: ['./app-table.component.scss']
})

export class AppTableComponent implements OnInit {

  @Input("tableConfig") tableConfig: IColumnConfig[] = [];
  @Input("tableData") tableData: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.tableConfig, this.tableData)
  }

}
