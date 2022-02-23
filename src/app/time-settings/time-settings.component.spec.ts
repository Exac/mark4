import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSettingsComponent } from './time-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeService } from '../time.service';
import { MockTimeService } from '../../mocks/time.service.mock';
import { SettingsService } from '../settings.service';
import { MockSettingsService } from '../../mocks/settings.service.mock';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InfoBoxModule } from '../info-box/info-box.module';

describe('TimeSettingsComponent', () => {
  let component: TimeSettingsComponent;
  let fixture: ComponentFixture<TimeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeSettingsComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        InputTextModule,
        InputNumberModule,
        InfoBoxModule,
      ],
      providers: [
        { provide: TimeService, useClass: MockTimeService },
        { provide: SettingsService, useClass: MockSettingsService },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
