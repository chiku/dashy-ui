// javascript/src/components/PipelineGroup.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const Pipeline = require('./Pipeline');

const PipelineGroup = function PipelineGroup() {
  const render = function (pipelines) {
    const groupProps = {
      class: `pipeline-group pipeline-group-${pipelines.length}`,
    };
    return ['div', groupProps, pipelines.map(pipeline => [Pipeline, pipeline])];
  };

  return {
    render,
  };
};

module.exports = PipelineGroup;
