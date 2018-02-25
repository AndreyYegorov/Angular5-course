import {Directive, ElementRef, HostListener, Input, OnInit} from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') color: string;
  @HostListener('click', ['$event']) onClick($event) {
    console.log('$event', $event);
  }
  /*@HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }*/

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }
}

