import { Injectable } from '@angular/core';
import { Section } from './section';
import { SECTIONS } from './mock-sections';

@Injectable()
export class SectionService {
  getSections(): Section[] {
    return SECTIONS;
  }
  constructor() { }
}

