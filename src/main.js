// javascript/src/main.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const domChanger = require('domchanger');
const nanoajax = require('nanoajax');

const config = require('./config')(window.config || {});
const PipelineGroupLister = require('./components/PipelineGroupList');
const pipelineError = require('./lib/pipelineError');
const cssContent = require('./lib/cssContent');
const isSuccess = require('./lib/isSuccess');

const requestBody = JSON.stringify({
  url: config.url,
  interests: config.interests,
});
const interval = config.interval;
const groupSize = config.groupSize;
const baseSize = config.baseSize;

const ajaxOptions = {
  url: '/dashy',
  type: 'POST',
  body: requestBody,
};

const initCSS = () => {
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssContent(baseSize);
  document.getElementsByTagName('head')[0].appendChild(style);
};

const Dashy = (emit, refresh) => {
  let pipelines = [];
  const responseHandler = (code, responseText) => {
    pipelines = (isSuccess(code)) ? JSON.parse(responseText) : pipelineError(responseText, code);
    refresh();
  };
  const tick = () => {
    nanoajax.ajax(ajaxOptions, responseHandler);
  };
  const render = () => [PipelineGroupLister(groupSize), pipelines];

  tick();
  setInterval(tick, interval);
  return {
    render,
  };
};

initCSS();
domChanger(Dashy, document.getElementById('app')).update();
