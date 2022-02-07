import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { firstValueFrom, Subject, takeUntil, tap } from 'rxjs';
import { TimeService } from '../time.service';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-time-settings',
  templateUrl: './time-settings.component.html',
  styleUrls: ['./time-settings.component.scss']
})
export class TimeSettingsComponent implements OnInit, OnDestroy {
  #destroy$ = new Subject<void>();

  form = this.fb.group({
    seconds: [0, Validators.required],
    minutes: [0, Validators.required],
    hours: [0, Validators.required],
  });

  currentClockTime$ = this.time.currentClockTime$;

  constructor(
    private readonly fb: FormBuilder,
    private readonly time: TimeService,
    private readonly settings: SettingsService,
  ) {
    this.form.valueChanges.pipe(
      tap((duration: Pick<Duration, 'seconds' | 'minutes' | 'hours'>) => this.settings.offsetClock = duration),
      takeUntil(this.#destroy$),
    ).subscribe();
  }

  async ngOnInit(): Promise<void> {
    const offset = await firstValueFrom(this.settings.offsetClock$);
    this.form.get('seconds')?.setValue(offset.seconds);
    this.form.get('minutes')?.setValue(offset.minutes);
    this.form.get('hours')?.setValue(offset.hours);
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

}
