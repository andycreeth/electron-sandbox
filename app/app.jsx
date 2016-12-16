import React from 'react';
import ReactDOM from 'react-dom';
import OpenButton from './components/open_button.jsx';
import Editor from './components/editor.jsx'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path: 'New File',
      text: 'Start Editing Some Text'
    };
  }

  render() {
    return (
      <div>
        <OpenButton onOpen={this.handleOpen.bind(this)} />
        <Editor
          fileName={this.state.path}
          text={this.state.text}
          onTextChange={this.handleTextChange.bind(this)} />
      </div>
    );
  }

  handleOpen(fileInfo) {
    this.setState({
      path: fileInfo.path,
      text: fileInfo.contents
    });
  }

  handleTextChange(text) {
    console.log(text);
    this.setState({ text: text });
  }

}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'));
});

