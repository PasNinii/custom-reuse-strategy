import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <ul>
      <li><a routerLink="/a">A</a></li>
      <li><a routerLink="/b">B</a></li>
      <li><a routerLink="/c">C</a></li>
    </ul>
    <router-outlet />
  `,
})
export class AppComponent { }

