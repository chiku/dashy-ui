// javascript/test/lib/pipelineError.test.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const { expect } = require('chai');

const pipelineError = require('../../src/lib/pipelineError');

describe('pipelineError', () => {
  describe('when the server has not yet responsed (code is 0)', () => {
    const error = pipelineError('some message', 0);

    it('shows a generic message', () => {
      expect(error).to.deep.equal([{
        name: 'Error - server down',
        stages: [{
          name: 'Error',
          status: 'Failed',
        }],
      }]);
    });
  });

  describe('when the server has responsed (code is not 0)', () => {
    const error = pipelineError('some message', 400);

    it('shows the given message', () => {
      expect(error).to.deep.equal([{
        name: 'some message',
        stages: [{
          name: 'Error',
          status: 'Failed',
        }],
      }]);
    });
  });
});
