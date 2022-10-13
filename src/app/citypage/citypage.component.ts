import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citypage',
  templateUrl: './citypage.component.html',
  styleUrls: ['./citypage.component.css']
})
export class CitypageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  OnSelect(cityid : number){
    this.router.navigate(['/hotelspage']);
    localStorage.setItem('cityid', JSON.stringify(cityid));

  }



}
