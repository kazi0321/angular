import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

interface isLoggedIn {
  status: boolean,
  username:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://172.20.145.140/api/isloggedin.php')
  }
}
