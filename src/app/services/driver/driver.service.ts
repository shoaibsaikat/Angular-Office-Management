import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Common } from '../../shared/common';
import { User } from 'src/app/shared/types/user';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private common: Common = new Common(this.http);

  // private currentDriver: User = {
  //   id: 0,
  //   username: '',
  // };

  private baseUrl: string = this.common.getBaseUrl().concat('driver/');
  private listUrl: string = this.baseUrl.concat('list/');

  constructor(private http: HttpClient) { }

  getDriverList(page: number = 1): Observable<string> {
    let listUrl = this.listUrl.concat('?page=' + page);
    return this.http.get<string>(listUrl, this.common.getHttpHeader());
  }
}
