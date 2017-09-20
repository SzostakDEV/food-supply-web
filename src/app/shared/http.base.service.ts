import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class HttpBaseService {
  private apiEndpoint =  'http://localhost:6161/';
  private headers: Headers;
  constructor(
    protected http: Http
  ) {
    this.handleError.bind(this);
    this.headers = new Headers();
  }

  handleError(error: any): Promise<any> {
    if (error.status === 500) {
      console.error('An error occurred', error); // for demo purposes only
      console.log(error.status);
    }
    return Promise.reject(error);
  }

  sendGet(url: string): Promise<any> {
    this.headers.append('sid', localStorage.getItem('sid'));
    return this.http.get(this.apiEndpoint + url, {
      headers: this.headers,
    }).toPromise()
      .catch(this.handleError);
  }
}
