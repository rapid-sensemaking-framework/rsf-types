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

export {
  ContactableConfig,
  Statement,
  Option,
  Reaction
}