import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Letter } from '../mark-page/mark-page.component';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent implements OnInit {

  @Input() time: Date = new Date();
  @Input() event: number = 1;
  @Input() race: Letter = 'A';
  @Output() remove = new EventEmitter<Event>();

  constructor() { }

  ngOnInit(): void {
  }

}
