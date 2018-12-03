import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, Subject, Subscription } from 'rxjs';

interface Res {
  answer: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RunService {

  private _resSubject: Subject<Res> = new Subject();

  constructor(private http: HttpClient) { }

  url = 'http://172.20.145.222:8080';

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };


  run(code): Subscription {
    return this.http.post<Res>(this.url, code).subscribe(res => {
      res.answer.forEach(str => this._resSubject.next);
    });
  }

  get result(): Observable<Res> {
    return this._resSubject.asObservable();
  }
}
