import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  JourneyPics = ['../assets/img/walk-line.png', '..assets/img/heart-line.png', '..assets/img/search-line.png', '..assets/img/flight-takeoff-line.png']

  constructor() { }

  ngOnInit(): void {
  }

}
