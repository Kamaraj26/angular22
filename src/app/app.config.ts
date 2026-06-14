import { ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode, Provider, EnvironmentProviders } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { zomotaReducer } from './store/zomota.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
    provideStore({ zomotaData: zomotaReducer }),
     provideStoreDevtools({
      maxAge: 50, // Retains last 50 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode in production
      autoPause: true, // Pauses recording when time travel takes place
      trace: true, // Include stack trace in devtools
    })
  ],
};


