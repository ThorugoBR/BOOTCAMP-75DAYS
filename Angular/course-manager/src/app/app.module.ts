import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { countReset } from 'console';
import { CourseListComponent } from './courses/course-list-component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    CourseListComponent,
    ReplacePipe,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
