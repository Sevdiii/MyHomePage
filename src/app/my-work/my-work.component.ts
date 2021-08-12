import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  ProjectImg = ['../assets/img/kochwelt.jpg!d', '../assets/img/Quiz.jpg', '../assets/img/Lieferando.jpg', '../assets/img/crm.jpg!d', '../assets/img/join1.jpg', '../assets/img/tic-tac-toe.jpg'];
  ProjectName = ['Kochwelt', 'Quiz-Game', 'Lieferando', 'Simple CRM', 'Join', 'Tic-Tac-Toe'];
  ProjectDescription = ['Introduction HTML/CSS', 'based -  JavaScript', 'Create shopping cart', 'Introduction - Angular ', 'Teamwork - GitHub', 'Introduction - JavaScript'];
  ProjectUrl = ['http://sevdi-azizi.developerakademie.com/Kochwelt_Final/index.html', 'http://sevdi-azizi.developerakademie.com/Quiz/quiz.html', 'http://sevdi-azizi.developerakademie.com/Lieferando/index.html', 'dfd', 'http://sevdi-azizi.developerakademie.com/Join/index.html', 'http://sevdi-azizi.developerakademie.com/TicTacToe/tictactoe.html'];
  
   


  

  
  
  constructor() { }

breakpoint: number;

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 1000) ? 1:3;
   
  }

  onResize(event) {

  }


}
