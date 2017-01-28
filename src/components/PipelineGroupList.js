// javascript/src/components/PipelineGroupList.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const PipelineGroup = require('./PipelineGroup');

const PipelineGroupList = groupSize => () => {
  const render = (pipelines) => {
    const len = pipelines.length;
    const groups = [];
    let i;
    for (i = 0; i < len; i += groupSize) {
      groups.push(pipelines.slice(i, i + groupSize));
    }
    return groups.map(group => [PipelineGroup, group]);
  };

  return {
    render,
  };
};

module.exports = PipelineGroupList;
