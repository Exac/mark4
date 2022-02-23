import { Public } from '../app/types';
import { SettingsService } from '../app/settings.service';
import { BehaviorSubject, Observable } from 'rxjs';

export class MockSettingsService implements Public<SettingsService> {
    offsetClock$: Observable<Duration> = new BehaviorSubject({});
    set offsetClock(offset: Duration) {}
    paddingBefore$: Observable<number> = new BehaviorSubject(0);
    paddingAfter$: Observable<number> = new BehaviorSubject(0);
    set padding(pad: { before: number; after: number; }) {}
}
