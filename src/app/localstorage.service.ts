import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  storage?: Storage;

  set = (key: string, value: string) => {
    if (this.storage) {
      this.storage.setItem(key, value);
    }
  };

  get = (key: string) => {
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
