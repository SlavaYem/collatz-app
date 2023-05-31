import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollatzService {

  generateCollatzSequence(n: number): number[] {
    const sequence: number[] = [n];
    while (n !== 1) {
      if (n % 2 === 0) {
        n = n / 2;
      } else {
        n = n * 3 + 1;
      }
      sequence.push(n);
    }
    return sequence;
  }
}
