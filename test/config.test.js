// test/config.test.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const expect = require('chai').expect;

const config = require('../src/config');

describe('Configuration', () => {
  describe('when configuration exists', () => {
    const conf = config({
      url: 'https://go.cd',
      interests: ['pipe-1', 'pipe-2'],
      interval: 1000,
      groupSize: 3,
      baseSize: 4,
    });

    it('has the user-supplied URL', () => {
      expect(conf.url).to.equal('https://go.cd');
    });

    it('has the user-supplied interests', () => {
      expect(conf.interests).to.deep.equal(['pipe-1', 'pipe-2']);
    });

    it('has the user-supplied interval', () => {
      expect(conf.interval).to.equal(1000);
    });

    it('has the user-supplied group-size', () => {
      expect(conf.groupSize).to.equal(3);
    });

    it('has the user-supplied base-size', () => {
      expect(conf.baseSize).to.equal(4);
    });
  });

  describe('when configuration does not exist', () => {
    const conf = config({});

    it('defaults interval to 30,000ms', () => {
      expect(conf.interval).to.equal(30000);
    });

    it('defaults group-size to 1', () => {
      expect(conf.groupSize).to.equal(1);
    });

    it('defaults base-size to 6', () => {
      expect(conf.baseSize).to.equal(6);
    });
  });
});
