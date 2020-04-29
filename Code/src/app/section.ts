import { Activity } from './activity';
import { LearnTab } from './learn-tab';
import { quizQuestion } from './quiz';
import { resourceItem } from './resource';

/**
 * Section interface.
 * Fields:
 * title - Name of the section
 * info - Information on the section
 * learnInfo - Text that fills the paragraph on the learn tab
 * selected - Boolean that decalares whether or not the section is currently selected
 * activities - List of activities for this section 
 */
export interface Section {
    title: string ;
    info: string;
    learnInfo: string;
    selected: boolean;

    activities: Activity[];

    tabs: LearnTab[];

    quiz: quizQuestion[];

    resource: resourceItem[];
}