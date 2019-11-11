"use strict";
exports.__esModule = true;
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
