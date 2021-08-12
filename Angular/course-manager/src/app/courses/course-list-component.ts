import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector:'app-course-list',
    templateUrl:'./course-list-component.html'
})
export class CourseListComponent implements OnInit{
    courses:Course[]=[];
    ngOnInit():void{
        this.courses=[
            {
                id:1,
                name:'Python',
                imageUrl:'',
                price:99.99,
                code:'py01',
                duration:720,
                rating:5,
                releaseDate:'December,2,2020'
            },

            {
                id:2,
                name:'Angular',
                imageUrl:'',
                price:80.99,
                code:'AG01',
                duration:600,
                rating:4.5,
                releaseDate:'December,4,2020'
            }
        ]
    }
}