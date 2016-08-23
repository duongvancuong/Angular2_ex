// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { Ang2AppComponent, environment } from './app/';
// import { AppModule } from './app/app.module';
// if (environment.production) {
//   enableProdMode();
// }

// bootstrap(Ang2AppComponent);
// platformBrowserDynamic().bootstrapModule(AppModule);


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);