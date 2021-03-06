import 'angular2-universal/polyfills';
import {prebootComplete} from 'angular2-universal';

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {enableProdMode} from 'angular2/core';

import {App} from './app/app.component';

enableProdMode();

bootstrap(App, [
  ...HTTP_PROVIDERS
])
.then(prebootComplete);
