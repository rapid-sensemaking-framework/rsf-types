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
declare class Contactable {
    constructor(id: string, name: string);
    id: string;
    name: string;
    speak(text: string): void;
    listen(callback: (text: string) => void): void;
    stopListening(): void;
}
export { ContactableConfig, Contactable, Statement, Option, Reaction };
