import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatDividerModule, MatMenuModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginInfoComponent } from './login-info/login-info.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterComponent } from './chapter/chapter.component';
import { AppRoutingModule } from './/app-routing.module';
import { CoreComponent } from './core/core.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginInfoComponent,
    ChapterComponent,
    ChapterListComponent,
    DetailComponent,
    CoreComponent,
  ],
  exports: [
    MatInputModule
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    OverlayModule,
    PortalModule,
    MatMenuModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [ HttpClientModule],
})
export class AppModule { }
