import { Routes } from '@angular/router';

import { AComponent } from './components/a.component';
import { BComponent } from './components/b.component';
import { CComponent } from './components/c.component';

export const routes: Routes = [
  { path: '', redirectTo: 'a', pathMatch: 'full' },
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent },
  { path: 'c', component: CComponent },
];
