import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent {
  items: MenuItem[] = [
    {
      label: 'Mark',
      icon: 'pi pi-fw pi-clock',
      routerLink: '/',
      replaceUrl: true,
    },
    {
      label: 'Settings',
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
