import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseListComponent } from './courses/course-list.component';
import { CourseInfoComponent } from './courses/course-info.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'courses',component:CourseListComponent},
      {path:'courses/info/:id',component:CourseInfoComponent},
      {path:'',redirectTo: 'courses',pathMatch:'full'},
    ]) ,
    HttpClientModule,
    CourseModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
