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

  checkQuiz()
  {
    let numCorrect = 0;
    for(let question of this.quiz)
    {
      for(let option of question.options)
      {
        if(option.isCorrect)
        {
          let correct = document.getElementById(option.optionText) as HTMLInputElement;
          if(correct.checked) question.answeredCorrect = true;
          else question.answeredCorrect = false;
        }
      }
      if (question.answeredCorrect)
      {
        document.getElementById(question.question).style.backgroundColor = "green";
        console.log("correct");
        numCorrect++;
      }
      else
      {
        document.getElementById(question.question).style.backgroundColor = "red";
        console.log("incorrect");
      } 
    }
  }

}
