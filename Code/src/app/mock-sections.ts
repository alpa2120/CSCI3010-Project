import { Section } from './section';
import { Activity } from './activity';

const ACTIVITIES: Activity[] = [
    {title: 'Activity 1', info: 'Information about activity 1'},
    {title: 'Activity 2', info: 'Information about activity 2'}
];

export const SECTIONS: Section[] = 
[
    {title: 'Section 1', info: 'Information about section 1', learnInfo: 'This will be under the learn tab', activities: ACTIVITIES, selected: false},
    {title: 'Section 2', info: 'Information about section 2', learnInfo: 'This will be under the learn tab', activities: ACTIVITIES, selected: false},
    {title: 'Section 3', info: 'Information about section 3', learnInfo: 'This will be under the learn tab', activities: ACTIVITIES, selected: false},
    {title: 'Section 4', info: 'Information about section 4', learnInfo: 'This will be under the learn tab', activities: ACTIVITIES, selected: false}
]