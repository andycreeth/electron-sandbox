import React from 'react';

// Need to use window.require to bypass webpacks,
// own require. Only needed for importing electron.
const { dialog } = window.require('electron').remote;

class OpenButton extends React.Component {

  render() {
    return (
      <button onClick={this.handleClick}>Open</button>
    );
  }

  handleClick() {
    dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});
  }

}

export default OpenButton;
