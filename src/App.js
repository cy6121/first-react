/**
 * Created by rain on 2017/12/17.
 */

import React from 'react';
import Routes from './router/index';

function App() {
  return (
    <Routes />
  );
}

export default process.env.NODE_ENV === 'development' ? require('react-hot-loader/root').hot(App) : App;
