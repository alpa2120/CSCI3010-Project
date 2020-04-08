import { Component, OnInit, Input} from '@angular/core';
import { Section } from '../section';
import { SECTIONS } from '../mock-sections';
import { quizQuestion } from '../quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  section: Section;
  quiz: quizQuestion[];

  constructor() { }

  ngOnInit() {
    this.getSelectedSection();
  }
  
  getSelectedSection()
  {
    for (let section of SECTIONS)
    {
      if (section.selected)
      {
        this.section = section;
        this.quiz = section.quiz;
      }
    }
  }

}
