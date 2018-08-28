import * as React from 'react';

import CHARACTERS from './mock_data';

/**
 * If you want to share data between multiple root components, you'll need a
 * global store like Redux. This is similar to building a web app where you
 * want to synchronize data between a sidebar and a main view - just extended
 * into three dimensions.
 * To simplify this sample, we implement a trivial Redux-like store that will
 * ensure all of our elements are synchronized.
 */
const State = {
  characters : [],
  current: 'Kano'
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function initState(){
  new Promise( resolve => resolve(CHARACTERS)).
    then(data => {
      State.characters = data;
      updateComponents()
    })
}


export function setCurrent(value) {
  State.current = value;
  updateComponents();
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      characters: State.characters,
      current: State.current,
    };

    _listener = () => {
      this.setState({
        characters: State.characters,
        current: State.current,
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    componentWillUnmount() {
      listeners.delete(this._listener);
    }

    render() {
      return (
        <Component
          {...this.props}
          characters={this.state.characters}
          current={this.state.current}
        />
      );
    }
  };
}