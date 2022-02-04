import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppTableService {

  constructor(private http: HttpClient) { }

  public getTableConfig() : Observable<any> {
    return this.http.get("assets/mock/tableConfig.json");
  }

  public getTableData() : Observable<any> {
    return this.http.get("assets/mock/tableData.json");
  }
}
