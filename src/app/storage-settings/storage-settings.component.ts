import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localstorage.service';

@Component({
  selector: 'app-storage-settings',
  templateUrl: './storage-settings.component.html',
  styleUrls: ['./storage-settings.component.scss']
})
export class StorageSettingsComponent implements OnInit {

  constructor(
    private readonly storage: LocalStorageService,
  ) { }

  deleteMarks = () => {
    this.storage.set('mark_page_records', '');
  }
  deleteTimeOffset = async () => {
    this.storage.set('settings_service_offset', '');
  }

  ngOnInit(): void {}

}
