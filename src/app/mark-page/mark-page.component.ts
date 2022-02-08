import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { LocalStorageService } from '../localstorage.service';

export type Letter =
  'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z';

export type Record = {
  time: Date;
  event: number;
  race: Letter;
};

@Component({
  selector: 'app-mark-page',
  templateUrl: './mark-page.component.html',
  styleUrls: ['./mark-page.component.scss'],
  providers: [ConfirmationService],
})
export class MarkPageComponent implements OnInit {
  records$: BehaviorSubject<Array<Record>> = new BehaviorSubject<Array<Record>>([]);

  currentEvent$: BehaviorSubject<number> = new BehaviorSubject(1);
  currentRace$: BehaviorSubject<Letter> = new BehaviorSubject<Letter>('A');

  eventItems = (): MenuItem[] => ([
    {
      label: 'Previous',
      icon: 'pi pi-minus',
      command: () => this.changeEvent(-1),
      disabled: this.currentEvent$.value === 1,
    },
    {
      label: 'Reset',
      icon: 'pi pi-undo',
      command: (event: { originalEvent: Event }) => this.resetEvent(event?.originalEvent),
      disabled: this.currentEvent$.value === 1,
    }
  ]);
  raceItems = (): MenuItem[] => ([
    {
      label: 'Previous',
      icon: 'pi pi-minus',
      command: () => this.changeRace(-1),
      disabled: this.currentRace$.value === 'A',
    }
  ]);

  removeRecord = (index: number, event: Event) => {
    this.confirmation.confirm({
      target: event.target || undefined,
      message: 'Are you sure you would like to delete this mark?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        let records = this.records$.value;
        records.splice(index, 1);
        this.records$.next(records);
      },
      reject: () => {},
    });
  };

  constructor(
    private readonly confirmation: ConfirmationService,
    private readonly storage: LocalStorageService,
  ) {
  }

  changeEvent = (by: 1 | -1): void => {
    const next = by + this.currentEvent$.value;
    if (next > 0) {
      this.currentEvent$.next(next);
    }
    this.currentRace$.next('A');
  };

  resetEvent = async (event: Event): Promise<void> => {
    this.confirmation.confirm({
      target: event.target || undefined,
      message: 'Are you sure you would like to reset back to the first race?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => { this.currentEvent$.next(1); this.currentRace$.next('A'); },
      reject: () => {},
    });
  };

  changeRace = (by: 1 | -1): void => {
    const nextCode: number = this.currentRace$.value.charCodeAt(0) + by;
    const next: Letter = String.fromCharCode(nextCode) as Letter;
    const aCode: number = 'A'.charCodeAt(0);
    const zCode: number = 'Z'.charCodeAt(0);
    if (nextCode >= aCode && nextCode <= zCode) {
      this.currentRace$.next(next);
    }
  };

  addRecord = (record: Record = {
    time: new Date(),
    event: this.currentEvent$.value,
    race: this.currentRace$.value,
  }): void => {
    this.records$.next([ record, ...this.records$.value ]);
    this.storage.set('mark_page_records', JSON.stringify(this.records$.value));
  };

  ngOnInit(): void {
    try {
      const records: Record[] = JSON.parse(this.storage.get('mark_page_records') || '');
      this.records$.next(records);
    } catch (e) {
      // No records, or no storage, don't load any records
    }

  }

}
