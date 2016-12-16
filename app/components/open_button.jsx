import React from 'react';

// Need to use window.require to bypass webpacks,
// own require. Only needed for importing electron.
const { remote, ipcRenderer } = window.require('electron');

class OpenButton extends React.Component {

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Open</button>
    );
  }

  handleClick() {
    let paths = remote.dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        {
          name: 'Text Files',
          extensions: ['txt']
        }
      ]
    });

    let contents = ipcRenderer.sendSync('file-read', paths[0]);
    this.props.onOpen({
      path: paths[0],
      contents: contents.replace(/(?:\r\n|\r|\n)/g, '<br />')
    });
  }

}

export default OpenButton;
