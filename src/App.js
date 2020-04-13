import React, {useEffect} from 'react';
import PropTypes from 'prop-types'
import Canvas from "./components/Canvas";
import {getCanvasPosition} from "./utils/formulas";

function App(props) {
    let canvasMousePosition = undefined;

    useEffect(() => {
       const interval = setInterval(() => {
           props.moveObjects(canvasMousePosition);
       }, 10)
       return () => clearInterval(interval);
    },[canvasMousePosition, props]);

    const trackMouse = (event) => {
      canvasMousePosition = getCanvasPosition(event)
    };

  return (
      <Canvas
        angle={props.angle}
        trackMouse={trackMouse}
      />
  );
}

App.propTypes = {
    angle: PropTypes.number.isRequired,
    moveObjects: PropTypes.func.isRequired
};

export default App;
