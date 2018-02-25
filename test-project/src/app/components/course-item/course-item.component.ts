import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CourseModel} from '../../interfaces/interfaces';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit{
  @Input() course: CourseModel;
  @Output() titleClicked = new EventEmitter();

  createDateDiff: number;

  handleTitle(): void {
    this.titleClicked.emit(this.course.title);
  }

  changeRating(): void {
    this.course.topRated = !this.course.topRated;
  }

  private getCreatedDateDiff(date1: Date, date2: Date): number {
    const MS_PER_DAY = 1000 * 60 * 60 * 24,
      UTC1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()),
      UTC2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    return Math.floor((UTC1 - UTC2) / MS_PER_DAY);
  }

  ngOnInit() {
    this.createDateDiff = this.getCreatedDateDiff(new Date(), new Date(this.course.createdAt));
  }
}
