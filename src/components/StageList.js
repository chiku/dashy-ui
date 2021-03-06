// javascript/src/components/StageList.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const Stage = require('./Stage');

const stageContainerProps = {
  class: 'stages-container',
};

const StageList = () => {
  const render = stages => ['div', stageContainerProps, stages.map(stage => [Stage, stage])];

  return {
    render,
  };
};

module.exports = StageList;
