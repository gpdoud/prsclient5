import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config.class';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  config: Config;

  constructor(
    private http: HttpClient
  ) { }

  getSettings(): Promise<Config | void> {
    return this.http.get("assets/config.json").toPromise().then(
      (config: Config) => {
        this.config = config;
      }
    );
  }
}
