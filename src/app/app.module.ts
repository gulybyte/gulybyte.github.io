import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesModule } from './base/global/modules/modules.module';
import { ComponentsHomeComponent } from './components-home/components-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
