/* *******  WARNING ********
object oriented *ish constructors below
consider yourself warned....
****************************/
import {
	AdminResult,
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
export const nullResult: (id?: string, questions?: string[]) => Result = (
	id,
	questions
) => {
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
		language: ''
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

export const nullAnswer: (index?: number, variable?: string) => Answer = (
	index,
	variable
) => {
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
