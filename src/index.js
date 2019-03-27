/*eslint-disable*/

/**
 * Created by rain on 2017/12/17.
 */

import './asset/css/main.pcss';
import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(
  <App />,
  document.getElementById('app')
);

