import { Component } from '@angular/core';
import { CollatzService } from './collatz.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  sequence: number[] = [];
  constructor(private collatzService: CollatzService) {}
  handleCollatzCalculated(sequence: number[]) {
    this.sequence = sequence;
    console.log(sequence);
  }
}
