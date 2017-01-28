// javascript/src/components/Pipeline.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const StageList = require('./StageList');
const PipelineName = require('./PipelineName');

const pipelineProps = {
  class: 'pipeline',
};

const Pipeline = () => {
  const render = pipeline => ['div',
    pipelineProps, [
      [StageList, pipeline.stages],
      [PipelineName, pipeline.name],
    ],
  ];

  return {
    render,
  };
};

module.exports = Pipeline;
