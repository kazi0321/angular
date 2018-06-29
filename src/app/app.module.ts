import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { EditaComponent } from './edita/edita.component';
import { DefaultTipComponent } from './default-tip/default-tip.component';
import { UserTipComponent } from './user-tip/user-tip.component';
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginInfoComponent,
    ChapterComponent,
    ChapterListComponent,
    DetailComponent,
    EditaComponent,
    DefaultTipComponent,
    UserTipComponent,
    OutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
