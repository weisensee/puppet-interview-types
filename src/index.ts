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
    incompletenessExplanation: string;
    otherAffects: string;
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

export type AuditVersionRecord = {
    [version: string]: { [device: string]: AuditChildRecord };
};

export type AuditChildRecord = {
    [childId: string]: { actions: AuditAction[]; initializationInfo: InitializationInfo };
};

export type AuditAction = {
    [timestamp: string]: AuditActionDetails;
};

export type AuditActionDetails = {
    currentQuestionIndex: number;
    description: string;
    info: {
        currentQuestion: {
            engQuestion: {
                leftText: string;
                rightText: string;
            };
            spnQuestion: {
                leftText: string;
                rightText: string;
            };
            variableName: string;
        };
        currentlyShowingAnimation: boolean;
        previousResponse: string;
        questionIndex: number;
        direction?: 'Left' | 'Right';
        leftText?: string;
        playThatsLikeMe?: boolean;
        questionPosed?: boolean;
        rightText?: string;
        selectedText?: string;
        thatsLikeMeFile?: string;
    };
    timestamp: number;
};

/* *******  WARNING ********
object oriented *ish constructors below
consider yourself warned....
****************************/
const NOT_ANSWERED = 'Not Answered';

export const nullAdminResult: () => AdminResult = () => ({
    break: NOT_ANSWERED,
    collegeGoal: NOT_ANSWERED,
    engaged: NOT_ANSWERED,
    help: NOT_ANSWERED,
    childrenOverseen: NOT_ANSWERED,
    savingMoneyGoal: NOT_ANSWERED,
    incompletenessExplanation: NOT_ANSWERED,
    otherAffects: NOT_ANSWERED
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
