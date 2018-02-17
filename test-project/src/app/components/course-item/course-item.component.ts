import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {CourseModel} from '../../interfaces/interfaces';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {
  @Input() course: CourseModel;
  @Output() titleClicked = new EventEmitter();

  handleTitle(): void {
    this.titleClicked.emit(this.course.title);
  }

  changeRating(): void {
    this.course.topRated = this.course.topRated ? false : true;
  }
}
