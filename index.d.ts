interface ContactableConfig {
    type: string;
    id: string;
    name?: string;
}
interface Statement {
    text: string;
    contact?: ContactableConfig;
    timestamp?: number;
}
interface Option {
    triggers: string[];
    text: string;
}
interface Reaction {
    statement: Statement;
    response: string;
    responseTrigger: string;
    contact?: ContactableConfig;
    timestamp?: number;
}
interface PairwiseChoice {
    0: Statement;
    1: Statement;
}
interface PairwiseVote {
    choices: PairwiseChoice;
    choice: number;
    contact?: ContactableConfig;
    timestamp?: number;
}
interface PairwiseQuantified {
    choices: PairwiseChoice;
    quantity: number;
    contact?: ContactableConfig;
    timestamp?: number;
}
interface PairwiseQualified {
    choices: PairwiseChoice;
    quality: string;
    contact?: ContactableConfig;
    timestamp?: number;
}
declare class Contactable {
    constructor(id: string, name: string);
    id: string;
    name: string;
    speak(text: string): Promise<void>;
    listen(callback: (text: string) => void): void;
    stopListening(): void;
    config(): ContactableConfig;
}
interface ParticipantRegisterConfig {
    id: string;
    title: string;
    description: string;
    maxParticipants: number | string;
    maxTime: number;
    types: RegisterTypesConfig;
}
interface RegisterTypesConfig {
    telegram: boolean;
    sms: boolean;
    mattermost: boolean;
}
interface ContactableSpecifyInit {
    doTelegram: boolean;
    doMattermost: boolean;
    doSms: boolean;
}
interface ContactableProxyConfig {
    socketUrl: string;
    socketSecret: string;
}
interface ContactableInitConfig {
    mattermostable: ContactableProxyConfig;
    smsable: ContactableProxyConfig;
    telegramable: ContactableProxyConfig;
}
export { RegisterTypesConfig, ParticipantRegisterConfig, ContactableConfig, Contactable, Statement, Option, Reaction, PairwiseChoice, PairwiseVote, PairwiseQuantified, PairwiseQualified, ContactableSpecifyInit, ContactableProxyConfig, ContactableInitConfig };
