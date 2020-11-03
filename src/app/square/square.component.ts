import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { getRandomInt } from '../app.component';
import { Square } from '../square.interface';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SquareComponent implements OnInit {
  isActive = false;
  @Input()
  isBlue = false;

  color: string;

  style = {};

  private defaultColor = `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(155)}, 0.5)`;
  @Output()
  changeItem = new EventEmitter<Square>();
  constructor() { }

  ngOnInit(): void {
    this.initColor();
  }

  selectThis(): void {
    this.isActive = !this.isActive;
    const isBlue = this.isBlue;
    const isActive = this.isActive;
    this.initColor();
    this.changeItem.emit({isBlue, isActive});
  }

  private initColor(): void {
    this.color = this.isBlue ? 'blue' : this.defaultColor;
    this.style = {'background-color': this.color};
  }
}