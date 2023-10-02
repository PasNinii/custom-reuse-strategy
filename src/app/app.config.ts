import { ApplicationConfig } from '@angular/core';
import { RouteReuseStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CustomReuseStrategy } from './strategy/custom-reuse.strategy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    }
  ]
};
