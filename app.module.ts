import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EsempioComponenteComponent } from './esempio-componente/esempio-componente.component';
import { CarDescriptionComponent } from './esempio-componente/car-description.component';
import { ProgressBarComponent } from './esempio-componente/progress-bar.component';
import { Counter } from './esempio-componente/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    EsempioComponenteComponent,
    CarDescriptionComponent,
    ProgressBarComponent,
    Counter
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
