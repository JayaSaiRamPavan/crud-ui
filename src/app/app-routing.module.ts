import { ReservationspageComponent } from './reservationspage/reservationspage.component';
import { RoomspageComponent } from './roomspage/roomspage.component';
import { HotelspageComponent } from './hotelspage/hotelspage.component';
import { CitypageComponent } from './citypage/citypage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CitypageComponent},
  {path: 'citypage' , component : CitypageComponent},
  {path: 'hotelspage', component : HotelspageComponent},
  {path: 'roomspage', component : RoomspageComponent},
  {path: 'reservationspage', component : ReservationspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
