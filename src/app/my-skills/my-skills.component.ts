import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  Skills = ['../assets/img/java script.png', '../assets/img/angular.png', '../assets/img/Group 205.png', '../assets/img/Group 226.png', '../assets/img/Git-Icon-1788C 2.png', '../assets/img/Group 20.png', '../assets/img/icons8-rest-api-80 2.png', '../assets/img/icons8-test-lab-96 2.png', '../assets/img/icons8-database-52 2.png' ];
  Skillname = ['Java script', 'Angular', 'HTML/CSS', 'SCRUM', 'Git', 'Design Thinking', 'Rest API', 'Test automation', 'Databases'];  
  constructor() { }

  ngOnInit(): void {
  }

}
