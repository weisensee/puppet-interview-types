import { PlatformManifest } from 'expo-constants';

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
	assent: boolean;
	csv?: string;
	dateQuestionsStarted: number;
	dateQuestionsUpdated: number;
	datePracticeStarted: number;
	datePracticeUpdated: number;
	dateSessionStart: number;
	dateUpdated: number;
	childId: string;
	id: string;
	interviewer: string;
	language: string;
	practiceDuration: number;
	questionDuration: number;
	school: string;
	sessionDuration: number;
}

export interface CsvStatus {
	modified: boolean;
	dateUpdated: number;
}

export interface AdminResult {
	break: string;
	childrenOverseen: string;
	collegeGoal: string;
	engaged: string;
	help: string;
	savingMoneyGoal: string;
	specialNeeds: string;
}

export interface ConnectedDevice {
	connections: any[];
	info: DeviceInfo;
	lastOnline: number;
}

export interface DeviceInfo {
	appOwnership: string;
	deviceName: string;
	deviceYearClass: number;
	installationId: string;
	isDevice: boolean;
	manifest: any;
	platform: PlatformManifest;
	sessionId: string;
}

export interface FirebaseUser {
	uid: string;
	email: string;
	emailVerified: boolean;
	displayName: string;
	photoURL: string;
	phoneNumber: undefined;
	disabled: boolean;
	claims: object;
	metadata: {
		lastSignInTime: string;
		creationTime: string;
	};
	passwordHash: string | undefined;
	passwordSalt: string | undefined;
	customClaims: { claims: object } | undefined;
	tokensValidAfterTime: string;
	providerData: [
		{
			uid: string;
			displayName: string;
			email: string;
			photoURL: string;
			providerId: string;
			phoneNumber: string | undefined;
		}
	];
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
		break: 'Not Answered',
		collegeGoal: 'Not Answered',
		engaged: 'Not Answered',
		help: 'Not Answered',
		childrenOverseen: 'Not Answered',
		savingMoneyGoal: 'Not Answered',
		specialNeeds: 'Not Answered'
	};
	return newObj;
};

export const nullResult: (
	id?: string,
	interviewer?: string,
	school?: string,
	language?: string,
	assent?: boolean,
	questions?: string[]
) => Result = (id, interviewer, school, language, assent, questions) => {
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
		assent: assent || false,
		dateQuestionsStarted: -1,
		dateQuestionsUpdated: -1,
		datePracticeStarted: -1,
		datePracticeUpdated: -1,
		dateSessionStart: -1,
		dateUpdated: Date.now(),
		childId: id || '',
		id: id || '',
		interviewer: interviewer || '',
		language: language || '',
		practiceDuration: 0,
		questionDuration: 0,
		school: school || '',
		sessionDuration: 0
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
