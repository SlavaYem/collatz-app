import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collatz-results',
  templateUrl: './collatz-results.component.html',
  styleUrls: ['./collatz-results.component.scss'],
})
export class CollatzResultsComponent implements OnInit {
  @Input()
  sequence: number[] | null = null;

  constructor() {}

  ngOnInit() {}
}
