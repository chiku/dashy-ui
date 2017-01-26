// javascript/src/components/PipelineName.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const pipelineNameProps = {
  class: 'pipeline-name',
};

const PipelineName = function PipelineName() {
  const render = function (name) {
    return ['div', pipelineNameProps, name];
  };

  return {
    render,
  };
};

module.exports = PipelineName;
