import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Letter } from '../mark-page/mark-page.component';
import { add } from 'date-fns';
import { BehaviorSubject, map, shareReplay, Subject } from 'rxjs';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent {

  date$: Subject<Date> = new BehaviorSubject<Date>(new Date());

  @Input() set time(d: Date | string) {
    this.date$.next(new Date(d));
  }
  @Input() event: number = 1;
  @Input() race: Letter = 'A';
  @Output() remove = new EventEmitter<Event>();

  from$ = this.date$.pipe(
    map(time => add(time, {seconds: -3})),
    shareReplay({bufferSize: 1, refCount: false})
  );
  to$ = this.date$.pipe(
    map(time => add(time, {seconds: 3})),
    shareReplay({bufferSize: 1, refCount: false}),
  );
}
