import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  constructor() {
    console.log('constructor', this.dynTitle);
  }

  ngOnInit(): void {
    console.log('init', this.dynTitle);
  }

  @Input() hide: boolean;
  @Input() dynTitle: string;
  @Output() buttonClicked = new EventEmitter();
  title: string = "hi there!";

  hadleClick(): void {
    this.buttonClicked.emit(this.title);
  }

}
