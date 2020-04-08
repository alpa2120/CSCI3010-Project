import { Section } from './section';
import { Activity } from './activity';

import { TABS } from './mock-learn-labs';
import { QUIZZES } from './mock-quizzes';

// This is a list of activities
const ACTIVITIES: Activity[] = [
    {title: 'Quiz', info: 'Test your knowledge'},
    {title: 'Matching', info: 'Get smarter'}
];

// This is the currect list of sections. 
export const SECTIONS: Section[] = 
[
    {
        title: 'Networking', 
        info: 'Information about section 1', 
        learnInfo: 'This will be under the learn tab', 
        activities: ACTIVITIES, 
        selected: false,
        tabs: TABS[0],
        quiz: QUIZZES[0]
    },
    {
        title: 'Cryptography', 
        info: 'Information about section 2', 
        learnInfo: 'This will be under the learn tab', 
        activities: ACTIVITIES, 
        selected: false,
        tabs: TABS[1],
        quiz: QUIZZES[1]
    },
    {
        title: 'Malware', 
        info: 'Information about section 3', 
        learnInfo: 'This will be under the learn tab', 
        activities: ACTIVITIES, 
        selected: false,
        tabs: TABS[2],
        quiz: QUIZZES[2]
    },
    {
        title: 'Quantum Encryption', 
        info: 'Information about section 4', 
        learnInfo: 'This will be under the learn tab', 
        activities: ACTIVITIES, 
        selected: false,
        tabs: TABS[3],
        quiz: QUIZZES[3]
    }
]