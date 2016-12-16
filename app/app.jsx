import React from 'react';
import ReactDOM from 'react-dom';
import OpenButton from './components/open_button.jsx';

class App extends React.Component {

  render() {
    return (
      <OpenButton />
    );
  }

  componentDidMount() {

  }

}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'))
});

