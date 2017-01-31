// javascript/src/lib/cssContent.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const cssContent = (baseSize) => {
  const a1 = baseSize;
  const a2 = baseSize * 0.986111;
  const a3 = baseSize * 0.833334;
  const a4 = baseSize * 0.125;

  return `.pipeline-name {height: ${a1}vmax; margin-top: ${-a2}vmax; font-size: ${a3}vmax;}` +
        ` .stage-container {height: ${a1}vmax;}` +
        ` .stage {font-size: ${a4}vmax;}`;
};

module.exports = cssContent;
