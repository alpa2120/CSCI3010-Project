import { Component, OnInit } from '@angular/core';
import { Section } from '../section';
import { SECTIONS } from '../mock-sections';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = "Home";
  sections = SECTIONS;
  constructor() { }

  ngOnInit() {
  }

  setSelectedSection(section: Section)
  {
    section.selected = true;
    console.log(section.title);
  }
}
