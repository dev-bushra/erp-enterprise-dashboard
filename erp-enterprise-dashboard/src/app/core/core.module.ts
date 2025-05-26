// ✅ Defines the CoreModule that provides the LoggingInterceptor globally and enforces it to be imported only once (in the AppModule) to avoid multiple interceptor instances
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule should only be imported in AppModule!');
    }
  }
}