import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserTipComponent } from './user-tip/user-tip.component';
import { OutputComponent } from './output/output.component';
import { CoreComponent } from './core/core.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { HeaderComponent } from './header/header.component';
import { EditaComponent } from './edita/edita.component';
import { DetailComponent } from './detail/detail.component';
import { DefaultTipComponent } from './default-tip/default-tip.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterComponent } from './chapter/chapter.component';
import { AppRoutingModule } from './/app-routing.module';
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDividerModule } from '@angular/material';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { MatMenuModule } from '@angular/material/menu';
import { TutorModule } from './tutor/tutor.module';
import { HtmlSafePipe } from './pipe/html-safe.pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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
    CoreComponent,
    HtmlSafePipe,
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
    TutorModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [ HttpClientModule],
})
export class AppModule { }
