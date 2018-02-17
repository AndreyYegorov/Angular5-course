import {Component, Input, ViewEncapsulation} from '@angular/core';
import {CourseModel} from '../../interfaces/interfaces';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() course: CourseModel;
}
