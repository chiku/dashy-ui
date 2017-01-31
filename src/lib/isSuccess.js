// javascript/src/lib/isSuccess.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const isSuccess = code => code >= 200 && code <= 299;

module.exports = isSuccess;
