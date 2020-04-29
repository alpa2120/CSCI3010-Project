//object used to create each quiz question and its options
interface quizOption {
    optionText: string;
    isCorrect: boolean;
}

export interface quizQuestion {
    question: string;
    options: quizOption[];
    id: number;
    answeredCorrect?: boolean;
}