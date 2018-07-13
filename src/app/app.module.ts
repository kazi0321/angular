
import { MatButtonModule} from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';

import {  MatInputModule } from '@angular/material';import { BrowserModule } from '@angular/platform-browser';
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
import { CoreComponent } from './core/core.component';

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
    OutputComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatButtonModule,
    MatFormFieldModule,
    MatInputModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
