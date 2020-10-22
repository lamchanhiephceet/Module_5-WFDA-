import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FontSizeEditorModule } from './font-size-editor/font-size-editor.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FontSizeEditorModule)
  .catch(err => console.error(err));
