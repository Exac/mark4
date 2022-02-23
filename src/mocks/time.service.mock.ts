import { BehaviorSubject, Observable } from 'rxjs';
import { TimeService } from '../app/time.service';
import { Public } from '../app/types';

export class MockTimeService implements Public<TimeService> {
    currentTime$: Observable<Date> = new BehaviorSubject(new Date());
    currentClockTime$: Observable<Date> = new BehaviorSubject(new Date());
}
