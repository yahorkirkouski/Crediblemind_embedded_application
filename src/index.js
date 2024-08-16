import React from 'react';
import * as ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import { App } from './App';

const crediblemindAssessment = reactToWebComponent(App, React, ReactDOM, {
  shadow: 'open',
  props: {
    data: 'string',
    bar: 'string',
  },
});

customElements.define('crediblemind-assessment', crediblemindAssessment);
