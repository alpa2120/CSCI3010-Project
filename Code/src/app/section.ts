import { Activity } from './activity';

export interface Section {
    title: string ;
    info: string;
    learnInfo: string;
    selected: boolean;

    activities: Activity[];
}