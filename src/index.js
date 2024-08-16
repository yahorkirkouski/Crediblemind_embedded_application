import React from 'react';
import * as ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import { App } from './App';
import r2wc from '@r2wc/react-to-web-component';

const crediblemindAssessmentShadow = reactToWebComponent(App, React, ReactDOM, {
  dashStyleAttributes: true,
  shadow: true,
});

const crediblemindAssessment = r2wc(App, {
  props: {
    data: 'string',
    showProgressBar: 'string',
},
});
customElements.define('crediblemind-assessment', crediblemindAssessment);
customElements.define('crediblemind-assessment-shadow', crediblemindAssessmentShadow);
