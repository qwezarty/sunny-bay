import { enableProdMode, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh-Hans';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// register zh-Hans locale
registerLocaleData(localeZh, 'zh-Hans');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
