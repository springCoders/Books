import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import {BooksDashboardModule} from '@officeintegrator/books-dashboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [BrowserModule, BooksDashboardModule, BrowserAnimationsModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
