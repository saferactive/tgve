import React, { useEffect, useState } from 'react';
import Eatlas from 'eatlas';

import './App.css';
import Header from './Header';

import { layers } from './utils';

function App() {

  const eAtlasInstance = (options) => {
    const { dataURL, geoURL, geoColumn } = options;
    return (
      <Eatlas dark={true}
        geographyColumn={geoColumn}
        geographyURL={geoURL}
        defaultURL={dataURL} /> 
    )
  }
  const [layerIndex, setLayerIndex] = useState(1)
  const map = eAtlasInstance({
    dataURL: layers[layerIndex].dURL,
    geoURL: layers[layerIndex].gURL,
    geoColumn: layers[layerIndex].gc
  })  
  const [component, setComponent] = useState(map);

  return (
    <>
      <Header dark={true} 
        // can we manage without router?
        switchComponent={(newComponent) => {
          if(!newComponent) {
            // reset
            document.title = "SaferActive"
            setComponent(map)
          } else {
            document.title = "SaferActive | About"
            setComponent(newComponent)
          }
        }}
        />
      {component}
      <div className="description mapboxgl-ctrl-bottom-right">
        {layers[layerIndex].name + ". " + layers[layerIndex].description}
      </div>
    </>
  );
}

export default App;
