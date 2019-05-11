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
	school: string;
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

/* *******  WARNING ********
object oriented *ish constructors below
consider yourself warned....
****************************/

import {
	AdminResult,
	CsvStatus,
	Result,
	Question,
	QuestionDetail,
	Interview,
	Answer
} from './index';

export const nullAdminResult: () => AdminResult = () => {
	let newObj = {
		answers: [],
		interviewId: '',
		id: ''
	};
	return newObj;
};
export const nullResult: (id?: string, questions?: string[]) => Result = (id, questions) => {
	let answers = [];
	if (questions) {
		let i;
		for (i = 0; i < questions.length; i++) {
			answers.push(nullAnswer(i, questions[i]));
		}
	}

	let newObj = {
		adminResult: nullAdminResult(),
		answers: answers,
		dateStarted: Date.now(),
		dateUpdated: Date.now(),
		childId: id || '',
		id: id || '',
		language: '',
		school: ''
	};
	return newObj;
};
export const nullQuestionDetail: () => QuestionDetail = () => {
	let newObj = { leftText: '', rightText: '' };
	return newObj;
};
export const nullQuestion: () => Question = () => {
	let newObj = {
		variableName: 'default',
		engQuestion: nullQuestionDetail(),
		spnQuestion: nullQuestionDetail()
	};
	return newObj;
};
export const nullInterview: () => Interview = () => {
	let newObj = {
		id: '',
		name: 'none',
		questions: []
	};
	return newObj;
};

export const nullAnswer: (index?: number, variable?: string) => Answer = (index, variable) => {
	// handle index === 0
	let newIndex = -1;
	if (index || index === 0) {
		newIndex = index;
	}

	let newObj = {
		dateCreated: Date.now(),
		index: newIndex,
		response: 'Not Answered',
		variable: variable || ''
	};
	return newObj;
};

export const nullCsvStatus: () => CsvStatus = () => {
	let newObj = {
		modified: false,
		dateUpdated: Date.now()
	};
	return newObj;
};
