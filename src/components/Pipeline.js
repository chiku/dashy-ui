// javascript/src/components/Pipeline.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const StageList = require('./StageList');
const PipelineName = require('./PipelineName');

const Pipeline = function Pipeline() {
  const pipelineProps = {
    class: 'pipeline',
  };
  const render = function (pipeline) {
    return ['div', pipelineProps, [
            [StageList, pipeline.stages],
            [PipelineName, pipeline.name],
    ]];
  };

  return {
    render,
  };
};

module.exports = Pipeline;
