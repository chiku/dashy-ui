// javascript/test/lib/isSuccess.test.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const { expect } = require('chai');

const isSuccess = require('../../src/lib/isSuccess');

describe('isSuccess', () => {
  describe('when 2xx', () => {
    it('is true', () => {
      expect(isSuccess(200)).to.equal(true);
      expect(isSuccess(299)).to.equal(true);
    });
  });

  describe('when greater than 299', () => {
    it('is false', () => {
      expect(isSuccess(300)).to.equal(false);
    });
  });

  describe('when less than 100', () => {
    it('is false', () => {
      expect(isSuccess(199)).to.equal(false);
    });
  });
});
