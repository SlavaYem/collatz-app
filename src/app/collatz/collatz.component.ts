import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CollatzService } from '../collatz.service';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.scss'],
})
export class CollatzComponent {
  @Output() calculated = new EventEmitter<number[]>();
  collatzForm: FormGroup;
  sequence: number[] | null = null;

  constructor(private formBuilder: FormBuilder, private collatzService: CollatzService) {
    this.collatzForm = this.formBuilder.group({
      numberInput: ['', Validators.required],
    });
  }
  calculateCollatz() {
    const numberInputControl = this.collatzForm.get('numberInput');
    if (numberInputControl) {
      const number = numberInputControl.value;
      this.sequence = this.collatzService.generateCollatzSequence(number);
      this.calculated.emit(this.sequence);
    }
  }
}

