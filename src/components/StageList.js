// javascript/src/components/StageList.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const Stage = require('./Stage');

const stageContainerProps = {
  class: 'stage-container',
};

const StageList = function StageList() {
  const render = function (stages) {
    return ['div', stageContainerProps, stages.map(stage => [Stage, stage])];
  };

  return {
    render,
  };
};

module.exports = StageList;
