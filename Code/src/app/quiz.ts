interface quizOption {
    optionText: string;
    isCorrect: boolean;
}

export interface quizQuestion {
    options: quizOption[];
    id: number;
    answeredCorrect?: boolean;
}
