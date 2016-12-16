import React from 'react';
import MediumEditor from 'react-medium-editor';

class Editor extends React.Component {

  render() {
    return (
      <div>
        <h3>{this.props.fileName}</h3>
        <MediumEditor
          text={this.props.text}
          onChange={this.handleChange.bind(this)}
          options={{toolbar: {buttons: ['bold', 'italic', 'underline']}}} />
      </div>
    );
  }

  handleChange(text, medium) {
    this.props.onTextChange(text);
  }
}

export default Editor;
