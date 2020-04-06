import React from 'react';
import PropTypes from 'prop-types'
import Canvas from "./components/Canvas";

function App() {
  return (
    <div className="App">
        <Canvas/>
    </div>
  );
}

App.propTypes = {
    message: PropTypes.string.isRequired
};

export default App;
