import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from '../api/models/auth.model';
import { CoursesService } from '../api/services/courses/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  listCourses?: Courses[];
  currentCourses: Courses = {};
  currentIndex = -1;
  title = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses(): void {
    console.log('this.coursesService.getAll()',this.coursesService.getAll());

    this.listCourses = this.coursesService.getAll();
    // this.coursesService.getAll().subscribe({
    //   next: (data) => {
    //     this.listCourses = data;
    //   },
    //   error: (e) => console.error(e),
    // });
  }

  refreshList(): void {
    this.getAllCourses();
    this.currentCourses = {};
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial: Courses, index: number): void {
    this.currentCourses = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.coursesService.deleteAll().subscribe({
      next: (res) => {
        console.log(res);
        this.refreshList();
      },
      error: (e) => console.error(e),
    });
  }

  searchTitle(): void {
    this.currentCourses = {};
    this.currentIndex = -1;

    this.coursesService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.listCourses = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
