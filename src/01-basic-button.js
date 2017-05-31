import React from 'react';

const content = document.createElement('div');
document.body.appendChild(content);

module.exports = class extends React.Component {
  static displayName = "01-basic-button";

  onGreatClick = (evt) => {
    alert('You think React is Great! ', evt);
  };

  onAmazingClick = (evt) => {
    console.log('My secret gnocchi sauce.', evt);
  };

  render() {
    return (
      <div>
        <h1>What do you think of React??</h1>

        <button
          name='button-1'
          value='great'
          onClick={this.onGreatClick}
        >
          Great
        </button>

        <button
          name='button-2'
          value='amazing'
          onClick={this.onAmazingClick}
        >
          Amazing
        </button>
      </div>
    );
  }
};
