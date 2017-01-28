// test/config.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const create = (conf) => {
  const {
        url,
        interests,
        interval = 30000,
         groupSize = 1,
         baseSize = 6,
        } = conf;

  return {
    url,
    interests,
    interval,
    groupSize,
    baseSize,
  };
};

module.exports = create;
