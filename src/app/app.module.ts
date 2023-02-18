import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesModule } from './base/global/modules/modules.module';
import { ComponentsBaseComponent } from './components/base/components-base.component';
import { ComponentsInfoinitComponent } from './components/infoinit/components-infoinit.component';
import { ComponentsAboutComponent } from './components/about/components-about.component';
import { NavComponent } from './components/base/nav/nav.component';
import { PhilosophyComponent } from './components/philosophy/philosophy.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsBaseComponent,
    ComponentsInfoinitComponent,
    ComponentsAboutComponent,
    NavComponent,
    PhilosophyComponent
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
