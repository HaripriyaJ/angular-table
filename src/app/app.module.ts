import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppTableComponent } from './app-table/app-table.component';
import { AppTableContentComponent } from './app-table/app-table-content/app-table-content.component';
import { ColumnOptionsComponent } from './app-table/column-options/column-options.component';
import { HeightDirective } from 'src/directives/calculateHeight.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppTableComponent,
    AppTableContentComponent,
    ColumnOptionsComponent,
    HeightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
