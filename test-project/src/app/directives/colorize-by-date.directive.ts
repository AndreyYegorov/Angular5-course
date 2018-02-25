import {Directive, ElementRef, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[appColorizeByDate]'
})
export class ColorizeByDateDirective implements OnInit {
  @Input('appColorizeByDate') dayDiff: number;

  constructor(private el: ElementRef) {

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
    this.el.nativeElement.style.backgroundColor = this.setColor();
  }
}

