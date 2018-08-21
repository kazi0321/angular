import { Component, OnInit } from '@angular/core';
import { MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})
export class LoginInfoComponent implements OnInit {
  user = "Guest"
  constructor(private loginService: LoginService) { }

  ngOnInit() {
   this.loginService.isLoggedIn().subscribe(data => {})
  }

}
