import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IColumnConfig } from 'src/interfaces/tableConfig';

@Component({
  selector: 'column-options',
  templateUrl: './column-options.component.html',
  styleUrls: ['./column-options.component.scss']
})
export class ColumnOptionsComponent {

  @Input("columnConfig") columnConfig!: IColumnConfig;
  @Output() changeColumnConfig: EventEmitter<IColumnConfig> = new EventEmitter();

  public showOptions: boolean = false;
  public screenPosition!: number;

  public toggleColumnOptions(event: any) {
    !this.showOptions ? (this.screenPosition = event.clientX) : (this.screenPosition = 0);
    this.showOptions = !this.showOptions;
  }

  public pinColumn(direction: "left" | "right" | "none") {
    this.changeColumnConfig.emit({...this.columnConfig, pinColumn: direction});
  }

  public positionOptions(): any {
    if (this.showOptions) {
      return this.screenPosition < window.screen.width / 2 ? {'left': this.screenPosition} : {'right': 0};
    }
    return ''; 
  }
}
