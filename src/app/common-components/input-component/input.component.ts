import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() parentForm;
  @Input() label;
  @Input() formControlName;

  constructor() { }

  ngOnInit(): void {
  }

}
