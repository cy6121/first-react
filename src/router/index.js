/**
 * Created by Raion on 2019/3/27.
 */

import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AsyncComponent from '../component/helper/AsyncComponent';

const Home = AsyncComponent(() => import('../container/home/home'));
const NotFound = AsyncComponent(() => import('../container/notFound'));

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/notFound" component={NotFound} />
      <Redirect to="/notFound" />
    </Switch>
  </BrowserRouter>
);
