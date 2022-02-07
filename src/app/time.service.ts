import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { interval, map, Observable, startWith, switchMap } from 'rxjs';
import { add } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  currentTime$: Observable<Date> = interval(1000).pipe(
    startWith(new Date()),
    map(() => new Date()),
  );
  currentClockTime$: Observable<Date> = interval(1000).pipe(
    startWith(new Date()),
    switchMap(() => this.settings.offsetClock$),
    map(offset => add(Date.now(), offset)),
  );

  constructor(
    private readonly settings: SettingsService,
  ) { }
}
