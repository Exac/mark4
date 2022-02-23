import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Duration } from 'date-fns';
import { LocalStorageService } from './localstorage.service';

export type Suggestion = {
  before: Duration;
  after: Duration;
};

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  #offsetClock$ = new BehaviorSubject<Duration>({ seconds: 0, minutes: 0, hours: 0 });
  offsetClock$ = this.#offsetClock$.asObservable();
  set offsetClock (offset: Duration) {
    this.localstorage.set('settings_service_offset', JSON.stringify(offset));
    this.#offsetClock$.next(offset);
  }

  constructor(
    private readonly localstorage: LocalStorageService,
  ) {
    try {
      const offset = this.localstorage.get('settings_service_offset');
      if (offset) {
        this.offsetClock = JSON.parse(offset);
      }
    } catch (e) {
      // Value was not parsable, so we will leave the default value
    }
  }
}
