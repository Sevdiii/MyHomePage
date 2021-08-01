import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  ProjectImg = ['../assets/img/Sharkie-gaming.jpg', '../assets/img/Quiz.jpg', '../assets/img/Lieferando.jpg', '../assets/img/ringoffire.jpg'];
  ProjectName = ['Sharkie', 'Quiz-Game', 'Lieferando', 'Ring of Fire'];
  ProjectDescription = ['JavaScript -  Swim-Game', 'Quiz-Game', 'Lieferando mit Warenkorb Funktion', 'Angular - Kartenspiel'];
  ProjectUrl = ['http://sevdi-azizi.developerakademie.com/El-poco-loco-Shark/index.html', 'http://sevdi-azizi.developerakademie.com/Quiz/quiz.html', 'http://sevdi-azizi.developerakademie.com/Lieferando/index.html'];
  
   

    ShowInfo(){
   document.getElementById('name')?.classList.remove('d-none');
    }
  
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
