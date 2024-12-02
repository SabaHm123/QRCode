import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Ajoutez cette ligne

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrGeneratorComponent } from './qr-generator/qr-generator.component';
import { FormsModule } from '@angular/forms';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';

@NgModule({
  declarations: [
    AppComponent,
    QrGeneratorComponent,
    WeatherDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule // Ajoutez HttpClientModule ici

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Ajoutez ceci

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
