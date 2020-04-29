import { Component, OnInit, Input} from '@angular/core';
import { Section } from '../section';
import { SECTIONS } from '../mock-sections';
import { resourceItem } from '../resource';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

  section: Section;
  resource: resourceItem[];

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
        this.resource = section.resource;
      }
    }
  }

}
