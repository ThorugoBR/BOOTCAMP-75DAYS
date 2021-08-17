import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";


@NgModule({
  declarations: [
    CourseListComponent,
    CourseInfoComponent
  ],

  imports:[
    FormsModule,
    RouterModule.forChild([
      {  path: 'courses', component :CourseListComponent},
      {  path: 'courses/info/:id', component :CourseInfoComponent},

    ]),



  ]
})

export class CourseModule {

}
