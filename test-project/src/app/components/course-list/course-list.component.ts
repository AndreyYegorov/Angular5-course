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
      createdAt: 1518213600000
    },{
      id: 2,
      topRated: true,
      title: 'Course 2',
      description: 'Some text for course 2',
      duration: 18000,
      createdAt: 1517349600000
    },{
      id: 3,
      topRated: false,
      title: 'Course 3',
      description: 'Some text for course 3',
      duration: 520000,
      createdAt: 1519585204431
    },{
      id: 4,
      topRated: false,
      title: 'Course 4',
      description: 'Some text for course 4',
      duration: 360000,
      createdAt: 1519847719951
    }
  ];

  getTitle(title): string {
    console.log('course title', title);
    return title;
  }
}
