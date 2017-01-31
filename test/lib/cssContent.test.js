// javascript/test/lib/cssContent.test.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const expect = require('chai').expect;

const cssContent = require('../../src/lib/cssContent');

describe('cssContent', () => {
  const content = cssContent(10);

  it('is based on base size', () => {
    expect(content).to.equal('.pipeline-name {height: 10vmax; margin-top: -9.86111vmax; font-size: 8.33334vmax;} .stage-container {height: 10vmax;} .stage {font-size: 1.25vmax;}');
  });
});
