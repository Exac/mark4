import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[] = [
    {
      label: 'Mark',
      icon: 'pi pi-fw pi-clock',
      routerLink: '/',
      replaceUrl: true,
    },
    {
      label: 'Configuration',
      icon: 'pi pi-fw pi-cog',
      routerLink: '/settings',
      replaceUrl: true,
    },
  ];

  constructor(
    private readonly primeNGConfig: PrimeNGConfig
  ) {
    this.primeNGConfig.ripple = true;
  }
}
