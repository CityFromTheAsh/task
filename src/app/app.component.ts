import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Square } from './square.interface';
import { SquareComponent } from './square/square.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task';
  @ViewChildren(SquareComponent) squareComponent: QueryList<SquareComponent>;
  blueCount: number;
  correctSelected: number;
  wrongSelected: number;
  squares: boolean[];
  ngOnInit(): void {
    this.initSquares();
  }
  addAnswer({isBlue, isActive}: Square): void {
    const value = isActive ? 1 : -1;
    if (isBlue) {
      this.correctSelected += value;
    } else {
      this.wrongSelected += value;
    }
  }

  submit(): void {
    if ((this.wrongSelected === 0) && (this.correctSelected === this.blueCount)) {
      this.squareComponent.forEach(square => square.isActive = false);
      this.initSquares();
    } else {
      alert('error');
    }
  }
  private initSquares(): void {
    this.correctSelected = 0;
    this.wrongSelected = 0;
    this.squares = [false, false, false, false, false, false];
    this.blueCount = getRandomInt(3) + 1;
    for (let i = 0; i < this.blueCount; i++) {
      let index = getRandomInt(this.squares.filter(square => !square).length);
      while (this.squares[index] === true) {
        index++;
      }
      this.squares[index] = true;
    }
  }
}


export function getRandomInt(max): number {
  return Math.floor(Math.random() * Math.floor(max));
}