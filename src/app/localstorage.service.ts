import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type StorageKey = 'mark_page_records' | 'settings_service_offset';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage?: Storage;

  set = (key: StorageKey, value: string) => {
    if (this.storage) {
      this.storage.setItem(key, value);
    }
  };

  get = (key: StorageKey) => {
    if (this.storage) {
      return this.storage.getItem(key);
    }
    return null;
  }

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: Object,
  ) {
    if (isPlatformBrowser(platformId)) {
      this.storage = localStorage;
    }
  }
}
