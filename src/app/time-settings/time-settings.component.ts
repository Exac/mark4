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

  offsetForm = this.fb.group({
    seconds: [0, Validators.required],
    minutes: [0, Validators.required],
    hours: [0, Validators.required],
  });

  paddingForm = this.fb.group({
    before: [0, Validators.required],
    after: [0, Validators.required],
  });

  currentClockTime$ = this.time.currentClockTime$;

  constructor(
    private readonly fb: FormBuilder,
    private readonly time: TimeService,
    private readonly settings: SettingsService,
  ) {
    this.offsetForm.valueChanges.pipe(
      tap((duration: Pick<Duration, 'seconds' | 'minutes' | 'hours'>) => this.settings.offsetClock = duration),
      takeUntil(this.#destroy$),
    ).subscribe();
    this.paddingForm.valueChanges.pipe(
      tap((padding: { before: number, after: number }) => this.settings.padding = padding),
      takeUntil(this.#destroy$),
    ).subscribe();
  }

  async ngOnInit(): Promise<void> {
    const offset = await firstValueFrom(this.settings.offsetClock$);
    this.offsetForm.get('seconds')?.setValue(offset.seconds);
    this.offsetForm.get('minutes')?.setValue(offset.minutes);
    this.offsetForm.get('hours')?.setValue(offset.hours);
    const before = await firstValueFrom(this.settings.paddingBefore$);
    const after = await firstValueFrom(this.settings.paddingAfter$);
    this.paddingForm.get('before')?.setValue(before);
    this.paddingForm.get('after')?.setValue(after);
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

}
