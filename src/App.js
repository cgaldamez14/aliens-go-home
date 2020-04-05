import React from 'react';
import PropTypes from 'prop-types'

function App(props) {
  return (
    <div className="App">
      <h1>{props.message}</h1>
    </div>
  );
}

App.propTypes = {
    message: PropTypes.string.isRequired
}

export default App;
