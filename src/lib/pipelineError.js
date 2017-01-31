// javascript/src/lib/pipelineError.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const fallbackMessage = 'Error - server down';
const errorStage = [{
  name: 'Error',
  status: 'Failed',
}];

const PipelineError = (message, code) => {
  const defaultedMessage = (code === 0) ? fallbackMessage : message;

  return [{
    name: defaultedMessage,
    stages: errorStage,
  }];
};

module.exports = PipelineError;
