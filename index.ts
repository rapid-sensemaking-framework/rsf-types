interface ContactableConfig {
  type: string
  id: string
  name?: string
}

interface Statement {
  text: string
}

interface Option {
  triggers: string[]
  text: string
}

interface Reaction {
  statement: Statement
  response: string
  responseTrigger: string
  id: string
  timestamp: number
}

interface PairwiseChoice {
  A: Statement
  1: Statement
}

interface PairwiseVote {
  choices: PairwiseChoice
  choice: string
  id: string
  timestamp: number
}

declare class Contactable {
  constructor(id: string, name: string)
  id: string
  name: string
  speak(text: string): Promise<void>
  listen(callback: (text: string) => void): void
  stopListening(): void
}

interface ParticipantRegisterData {
  id: string
  maxParticipants: number | string
  maxTime: number
  processDescription: string
}

export {
  ParticipantRegisterData,
  ContactableConfig,
  Contactable,
  Statement,
  Option,
  Reaction,
  PairwiseChoice,
  PairwiseVote
}

/*
      [Response], array of the responses collected
      Response.statement : Statement, the same as the Statement objects given
      Response.response : String, the text of the selected option
      Response.responseTrigger : String, the original text of the response
      Response.id : String, the id of the agent who gave the response
      Response.timestamp : Number, the unix timestamp of the moment the message was received
      */



      /*
    RESULTS:
    [Choice], array of Choice
    Choice.choices : ChoiceObject, the choices being chosen between
    ChoiceObject.A : String, the text of the choice associated with key A
    ChoiceObject.1 : String, the text of the choice associated with key 1
    Choice.choice : String, 1 or A, whichever was chosen
    Choice.id : String, the id of the contactable who chose
    Choice.timestamp : Number, the unix timestamp specifying when the choice was made
    */