import { Component, OnInit } from '@angular/core';
import { Section } from '../section';
import { Activity } from '../activity';
import { SECTIONS } from '../mock-sections';

@Component({
  selector: 'app-section-template',
  templateUrl: './section-template.component.html',
  styleUrls: ['./section-template.component.scss']
})
export class SectionTemplateComponent implements OnInit {

  section: Section;
  activities: Activity[];

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
        this.activities = section.activities;
      }
    }
  }

  deselectSection()
  {
    this.section.selected = false;
  }
}

