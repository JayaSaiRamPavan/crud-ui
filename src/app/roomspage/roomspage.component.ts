import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roomspage',
  templateUrl: './roomspage.component.html',
  styleUrls: ['./roomspage.component.css']
})
export class RoomspageComponent implements OnInit {
  PATH_OF_API = 'http://localhost:8080';
  constructor(private httpclient: HttpClient,private router : Router) { }

  rooms : any;
  hotelid : any;
  ngOnInit(): void {
    this.hotelid = localStorage.getItem('hotelid');
    this.httpclient.get(this.PATH_OF_API + '/hotelid/'+ this.hotelid +'/rooms').subscribe(
      (response :any) => {
        this.rooms = response;
        console.log("Rooms are");
        console.log(this.rooms);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  OnSelect(roomid : number){
    this.router.navigate(['/reservationspage']);
    localStorage.setItem('roomid', JSON.stringify(roomid));
  }

}
