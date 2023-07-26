import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './featurs/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

//Angular materia

import { MatTableModule } from '@angular/material/table';
import { OrderService } from './services/orders/order.service';
import { ReactiveFormsModule } from '@angular/forms';

// fine Angular Material
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [OrderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
