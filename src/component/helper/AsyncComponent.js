/**
 * Created by Raion on 2019/3/27.
 */

import React, { Component } from 'react';

function asyncComponent(wrapComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await wrapComponent();
      this.setState({
        component,
      });
    }

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return AsyncComponent;
}

export default asyncComponent;
