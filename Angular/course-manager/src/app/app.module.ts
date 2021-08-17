import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { CourseModule } from './courses/course.module';


@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'courses',component:CourseListComponent},
      {path:'courses/info/:id',component:CourseInfoComponent},
      {path:'',redirectTo: 'courses',pathMatch:'full'},
      {path:'**', component: Error404Component}
    ]) ,
    HttpClientModule,
    CourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
