import { Component, OnInit } from '@angular/core';
import { Section } from '../section'; // Section class
import { Activity } from '../activity'; // Activity class
import { LearnTab } from '../learn-tab';

import { SECTIONS } from '../mock-sections'; // Array of Sections
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-section-template',
  templateUrl: './section-template.component.html',
  styleUrls: ['./section-template.component.scss'],
  providers: [NgbCarouselConfig]
})
export class SectionTemplateComponent implements OnInit {

  section: Section;
  activities: Activity[];
  tabs: LearnTab[];

  constructor() { }

  ngOnInit() {
    // When this page is opened, the following code will be called.
    this.getSelectedSection(); // Open to correct section.
  }

  /**
   * Open the section template page to the proper section.
   * Find which section is selected in the list of sections and set the fields of the SectionTemplateComponent class.
   * @param NONE
   * @returns NONE
   */
  getSelectedSection()
  {
    for (let section of SECTIONS)
    {
      if (section.selected)
      {
        this.section = section;
        this.activities = section.activities;
        this.tabs = section.tabs;
      }
    }
  }

  /**
   * Deselect the current section when returning to the home page.
   * @param NONE
   * @returns NONE
   */
  deselectSection()
  {
    this.section.selected = false;
  }
}

