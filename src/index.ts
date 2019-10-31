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

export type Location = string[];

export interface UserAccessInfo {
	enabled: boolean;
	manageUserAccess: boolean;
	viewResults: boolean;
	viewActiveDevices: boolean;
	editInterview: boolean;
	admin: boolean;
}

export interface Result {
	adminResult: AdminResult;
	answers: Answer[];
	assent: boolean;
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

export interface InitializationInfo {
	assent?: boolean;
	childId: string;
	interviewer: string;
	language: string;
	school: string;
}

export interface ConnectedDevice {
	connections: any[];
	info: DeviceInfo;
	lastOnline: number;
	progress: {
		currentQuestion?: number;
		initializationInfo?: InitializationInfo;
		result?: Result;
	};
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

export interface Theme {
	primaryColor: string;
	secondaryColor: string;
	tertiaryColor: string;
	lightText: string;
	greyText: string;
	darkText: string;
	lightBackground: string;
	lightIcon: string;
	disabledBackground: string;
	activeGreen: string;
	activeGreenBackground: string;
	errorBackground: string;
	errorText: string;
	lightRedBackground: string;
	warningBackground: string;
	warningText: string;
}

/* *******  WARNING ********
object oriented *ish constructors below
consider yourself warned....
****************************/

export const nullAdminResult: () => AdminResult = () => ({
	break: 'Not Answered',
	collegeGoal: 'Not Answered',
	engaged: 'Not Answered',
	help: 'Not Answered',
	childrenOverseen: 'Not Answered',
	savingMoneyGoal: 'Not Answered',
	specialNeeds: 'Not Answered'
});

export const nullResult: (
	id?: string,
	interviewer?: string,
	school?: string,
	language?: string,
	assent?: boolean,
	questions?: string[]
) => Result = (id, interviewer, school, language, assent, questions) => {
	const answers = questions ? questions.map((value, i) => nullAnswer(i, value)) : [];

	return {
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
};

export const nullQuestionDetail: () => QuestionDetail = () => ({ leftText: '', rightText: '' });

export const nullQuestion: () => Question = () => ({
	variableName: 'default',
	engQuestion: nullQuestionDetail(),
	spnQuestion: nullQuestionDetail()
});

export const nullInterview: () => Interview = () => ({ id: '', name: 'none', questions: [] });

export const nullAnswer: (index?: number, variable?: string) => Answer = (index, variable) => {
	// handle index === 0
	const newIndex = index || index === 0 ? index : -1;

	return {
		dateCreated: Date.now(),
		index: newIndex,
		response: 'Not Answered',
		variable: variable || ''
	};
};

export const nullCsvStatus: () => CsvStatus = () => ({ modified: false, dateUpdated: Date.now() });
