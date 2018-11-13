import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterComponent } from './chapter/chapter.component';
import { CoreComponent } from './core/core.component';
import { DefaultTipComponent } from './default-tip/default-tip.component';
import { OutputComponent } from './output/output.component';

import { AppRoutingModule } from './/app-routing.module';
import { EditorModule } from './editor/editor.module';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { MatIconModule,MatChipsModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginInfoComponent,
    ChapterComponent,
    ChapterListComponent,
    DetailComponent,
    CoreComponent,
    DefaultTipComponent,
    OutputComponent,
  ],
  imports: [
    AppRoutingModule,
    EditorModule,
    MaterialModule,
    SharedModule,
    MatChipsModule,
    MatIconModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [],
})
export class AppModule { }