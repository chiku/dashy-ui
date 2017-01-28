// javascript/src/main.js
//
// Author::    Chirantan Mitra
// Copyright:: Copyright (c) 2015-2017. All rights reserved
// License::   MIT

const domChanger = require('domchanger');
const nanoajax = require('nanoajax');
const PipelineGroupLister = require('./components/PipelineGroupList');

const config = window.config || {};

const requestBody = JSON.stringify({
  url: config.url,
  interests: config.interests,
});
const interval = config.interval || 30000;
const groupSize = config.groupSize || 1;
const baseSize = config.baseSize || 6;

const isSuccess = code => code >= 200 && code <= 299;

const initCSS = () => {
  const a1 = baseSize;
  const a2 = baseSize * 0.986111;
  const a3 = baseSize * 0.833334;
  const a4 = baseSize * 0.125;

  const cssContent = `.pipeline-name {height: ${a1}vmax; margin-top: ${-a2}vmax; font-size: ${a3}vmax;}` +
        ` .stage-container {height: ${a1}vmax;}` +
        ` .stage {font-size: ${a4}vmax;}`;

  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssContent;
  document.getElementsByTagName('head')[0].appendChild(style);
};

const asError = (message, code) => {
  const defaultedMessage = (code === 0) ? 'Error - server down' : message;
  return [{
    name: defaultedMessage,
    stages: [{
      name: 'Error',
      status: 'Failed',
    }],
  }];
};

const Dashy = (emit, refresh) => {
  let pipelines = [];
  const responseHandler = (code, responseText) => {
    if (isSuccess(code)) {
      pipelines = JSON.parse(responseText);
    } else {
      pipelines = asError(responseText, code);
            /* eslint "no-console": 0 */
      console.error(responseText);
    }
    refresh();
  };
  const ajaxOptions = {
    url: '/dashy',
    type: 'POST',
    body: requestBody,
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
