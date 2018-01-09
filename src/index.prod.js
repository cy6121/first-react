/**
 * Created by rain on 2017/12/27.
 */

/*eslint-disable*/
import React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';
import App from './App';

const renderDom = Component => {
    render(
          <Component />,
        document.getElementById('app')
    );
};
renderDom(App);


