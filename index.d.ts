interface ContactableConfig {
    type: string;
    id: string;
    name?: string;
}
interface Statement {
    text: string;
}
interface Option {
    triggers: string[];
    text: string;
}
interface Reaction {
    statement: Statement;
    response: string;
    responseTrigger: string;
    id: string;
    timestamp: number;
}
interface PairwiseChoice {
    A: Statement;
    1: Statement;
}
interface PairwiseVote {
    choices: PairwiseChoice;
    choice: string;
    id: string;
    timestamp: number;
}
declare class Contactable {
    constructor(id: string, name: string);
    id: string;
    name: string;
    speak(text: string): Promise<void>;
    listen(callback: (text: string) => void): void;
    stopListening(): void;
}
interface ParticipantRegisterData {
    id: string;
    maxParticipants: number | string;
    maxTime: number;
    processDescription: string;
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
export { ParticipantRegisterData, ContactableConfig, Contactable, Statement, Option, Reaction, PairwiseChoice, PairwiseVote, ContactableSpecifyInit, ContactableProxyConfig, ContactableInitConfig };
