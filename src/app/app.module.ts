import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitypageComponent } from './citypage/citypage.component';
import { HotelspageComponent } from './hotelspage/hotelspage.component';
import { RoomspageComponent } from './roomspage/roomspage.component';
import { ReservationspageComponent } from './reservationspage/reservationspage.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CitypageComponent,
    HotelspageComponent,
    RoomspageComponent,
    ReservationspageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
