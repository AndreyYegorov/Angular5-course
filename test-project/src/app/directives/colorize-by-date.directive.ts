import {Directive, ElementRef, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[appColorizeByDate]'
})
export class ColorizeByDateDirective implements OnInit {
  @Input('appColorizeByDate') date: number;

  dayDiff: number;

  constructor(private el: ElementRef) {

  }

  private getCreatedDateDiff(dateCurrent: Date, dateCreated: Date): number {
    const MS_PER_DAY = 1000 * 60 * 60 * 24,
      UTC1 = Date.UTC(dateCurrent.getFullYear(), dateCurrent.getMonth(), dateCurrent.getDate()),
      UTC2 = Date.UTC(dateCreated.getFullYear(), dateCreated.getMonth(), dateCreated.getDate());

    return Math.floor((UTC1 - UTC2) / MS_PER_DAY);
  }

  private setColor(): string {
    let color;

    if(this.dayDiff < 7) {
      color = 'green';
    } else if(this.dayDiff < 15) {
      color = 'orange';
    } else {
      color = 'gray';
    }

    return color;
  }

  ngOnInit() {
    this.dayDiff = this.getCreatedDateDiff(new Date(), new Date(this.date));
    this.el.nativeElement.style.backgroundColor = this.setColor();
  }
}

