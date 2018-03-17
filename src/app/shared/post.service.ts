import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';

@Injectable()
export class PostService {

  url: string;
  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:3977/api/post';
  }

  getAllPosts(): Promise<any> {
    return this.http.get(this.url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  createPost(post: any): Promise<any> {
    return this.http.post(this.url, post)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  extractData(res: ArrayBuffer) {
    return res;
  }

  handleError(err: HttpErrorResponse) {
    return new ErrorObservable(err);
  }

}
