// javascript/src/components/Stage.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const Stage = function Stage() {
  const render = function (stage) {
    const stageProps = {
      class: `stage ${stage.status.toLowerCase()}`,
    };
    return ['div', stageProps, stage.name];
  };

  return {
    render,
  };
};

module.exports = Stage;
