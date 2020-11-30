import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input()
  value: number;

  @Output()
  valueChange = new EventEmitter<number>();

  array = new Array(5);

  constructor() { }

  ngOnInit(): void {
    
  }

  isMarked(index: number) {
    return index < this.value;
  }

  changeValue(value: number) {
    if (this.value === value + 1) {
      this.value = 0;
    } else {
      this.value = value + 1;
    }
    this.valueChange.emit(this.value);
  }
}
