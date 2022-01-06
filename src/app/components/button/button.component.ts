import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() color!: String;
  @Input() text!: String;

  @Output() btnClick = new EventEmitter();

  onClick(): void {
    this.btnClick.emit();
  }
}
