import {Component} from '@angular/core';
import {CourseModel} from '../../interfaces/interfaces';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses: CourseModel[] = [
    {
      id: 1,
      topRated: false,
      title: 'Course 1',
      description: 'Some text for course 1',
      duration: 360000,
      createdAt: new Date()
    },{
      id: 2,
      topRated: true,
      title: 'Course 2',
      description: 'Some text for course 2',
      duration: 18000,
      createdAt: new Date()
    },{
      id: 3,
      topRated: false,
      title: 'Course 3',
      description: 'Some text for course 3',
      duration: 520000,
      createdAt: new Date()
    }
  ];

  getTitle(title): string {
    console.log('course title', title);
    return title;
  }
}
