import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Duration } from 'date-fns';
import { LocalStorageService } from './localstorage.service';

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

  #padding = new BehaviorSubject({ before: -3, after: 3 });
  paddingBefore$: Observable<number> = this.#padding.pipe(map(padding => padding.before));
  paddingAfter$: Observable<number> = this.#padding.pipe(map(padding => padding.after));
  set padding (pad: { before: number, after: number }) {
    this.localstorage.set('settings_service_padding', JSON.stringify(pad));
    this.#padding.next(pad);
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
    try {
      const padding = this.localstorage.get('settings_service_padding');
      if (padding) {
        this.padding = JSON.parse(padding);
      }
    } catch (e) {
      // Noop
    }
  }
}
