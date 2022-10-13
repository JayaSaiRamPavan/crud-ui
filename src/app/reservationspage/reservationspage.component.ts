import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservationspage',
  templateUrl: './reservationspage.component.html',
  styleUrls: ['./reservationspage.component.css']
})
export class ReservationspageComponent implements OnInit {

  constructor() { }

  roomid : any;
  userid : any;
  ngOnInit(): void {
    this.roomid = localStorage.getItem('roomid');
    this.userid = 1;
  }

}
