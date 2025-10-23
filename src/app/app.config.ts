import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import {
  provideRouter,
  withViewTransitions,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withViewTransitions(),
      // 🧠 Nouveau système Angular Router :

                 // permet le scroll vers les ancres (#gallery)
      withInMemoryScrolling({            // permet aussi la restauration et un offset
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ), 
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
  ]
};
