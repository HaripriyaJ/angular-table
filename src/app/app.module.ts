import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppTableComponent } from './app-table/app-table.component';
import { AppTableContentComponent } from './app-table/app-table-content.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTableComponent,
    AppTableContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
