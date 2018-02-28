import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DurationPipe } from './pipes/duration.pipe';

import { HighlightDirective } from './directives/highlight.directive';
import { ColorizeByDateDirective } from './directives/colorize-by-date.directive';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseItemComponent } from './components/course-item/course-item.component';

@NgModule({
  declarations: [
    CapitalizePipe,
    DurationPipe,

    HighlightDirective,
    ColorizeByDateDirective,

    AppComponent,
    LogoComponent,
    HeaderComponent,
    CourseListComponent,
    CourseItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
