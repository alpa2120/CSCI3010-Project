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
        info: "Let's learn how the Internet works!", 
        learnInfo: 'This will be under the learn tab',  //learnInfo field not needed anymore?
        activities: ACTIVITIES, 
        selected: false,
        tabs: TABS[0],
        quiz: QUIZZES[0]
    },
    {
        title: 'Cryptography', 
        info: 'Dive into the fundamentals of secure communication and encryption!', 
        learnInfo: 'This will be under the learn tab', 
        activities: ACTIVITIES, 
        selected: false,
        tabs: TABS[1],
        quiz: QUIZZES[1]
    },
    {
        title: 'Malware', 
        info: 'What exactly is a virus?', 
        learnInfo: 'This will be under the learn tab', 
        activities: ACTIVITIES, 
        selected: false,
        tabs: TABS[2],
        quiz: QUIZZES[2]
    },
    {
        title: 'Social Engineering', 
        info: 'How to stay safe on the Internet!', 
        learnInfo: 'This will be under the learn tab', 
        activities: ACTIVITIES, 
        selected: false,
        tabs: TABS[3],
        quiz: QUIZZES[3]
    }
]