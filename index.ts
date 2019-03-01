export interface AppState {
	childIds: number[];
	currentQuestionIndex: number;
	interview: Interview;
	interviewLoaded: boolean;
	language?: string;
	languages: 'English' | 'Spanish';
	result: Result;
	selectedInterview: string;
	verified: boolean;
}

export interface QuestionDetail {
	leftText: string;
	rightText: string;
}

export interface Question {
	variableName: string;
	engQuestion: QuestionDetail;
	spnQuestion: QuestionDetail;
}

export interface Interview {
	id: string;
	name: string;
	questions: Question[];
}

export interface Answer {
	dateCreated: number;
	index: number;
	response: string;
	variable: string;
}

export interface Result {
	adminResult: AdminResult;
	answers: Answer[];
	csv?: string;
	dateStarted: number;
	dateUpdated: number;
	childId: string;
	id: string;
	language: string;
}

export interface CsvStatus {
	modified: boolean;
	dateUpdated: number;
}

export interface AdminResult {
	answers: Answer[];
	interviewId: string;
	id: string;
}
