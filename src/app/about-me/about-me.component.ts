import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  JourneyPics = ['../assets/img/walk-line.png', '../assets/img/heart-line.png', '../assets/img/search-line.png', '../assets/img/flight-takeoff-line.png'];
  Tripstopics = ['SELBSTSTÄNDIG', 'ERSTE PROJEKTE', 'PROFESSIONELLE HILFE', 'START IN DIE KARRIERE'];
  Tripsinfo = ['Die  Erfahrungen im programmieren durch YouTube Videos und Bücher weiterentwickelt', 'Um meine Kenntnisse zu erweitern, suchte ich mir echte Projekte auf Ebay-kleinanzeigen und trat mit dem Kunden in Kontakt', 'Durch die Developer Akademie, die auf Youtube präsens waren, bin ich zum Entschluss gekommen, dass ein Intensivkurs die beste Einstiegsmöglichkeit als Software Entwickler ist', 'Nach einer 3 Monatigen Vollzeit Ausbildung bei der Developer Akademie, bin ich nun in der Lage Projekte alleine, sowie im Team zu lösen. Ab jetzt kann meine Karriere als Frontend Developer beginnen'];


  constructor() { }

  ngOnInit(): void {
  }

}
