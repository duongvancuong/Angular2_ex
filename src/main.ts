import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Ang2AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ang2AppComponent);
