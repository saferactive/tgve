import React, {useEffect, useState } from 'react';
import Eatlas from 'eatlas';

import './App.css';
import Header from './Header';

import { layers } from './utils';
import Layers from './Layers';
import About from './About';

function App() {

  const [layerIndex, setLayerIndex] = useState(0)
  const [tgve, setTgve] = useState(null);
  const [route, setRoute] = useState(null)
  useEffect(() => {
    const tgveInstance = (defaultURL, geographyURL, geographyColumn) => {
      return (
        <Eatlas dark={true}
          key={defaultURL}
          geographyColumn={geographyColumn}
          geographyURL={geographyURL}
          defaultURL={defaultURL}
          leftSidebarContent={
            <div>
              <div>
                {layers[layerIndex].name + ". " + layers[layerIndex].description}
              </div>
              <Layers
                index={layerIndex + ""}
                callback={(index) => {
                  if (index < 0) setLayerIndex(0)
                  if (index >= layers.length) setLayerIndex(layers.length - 1)
                  setLayerIndex(index)
                }} />
            </div>
          } />
      )
    }
    // console.log(layerIndex)
    setTgve(tgveInstance(layers[layerIndex].dURL,
      layers[layerIndex].gURL,
      layers[layerIndex].gc
    ))
  }, [layerIndex])
  // console.log(layers[layerIndex].gc)
  return (
    <>
      <Header dark={true}
        // can we manage without router?
        switchComponent={(newRoute) => {
          if (!newRoute) {
            // reset
            document.title = "SaferActive"
            setRoute(null)
          } else {
            document.title = "SaferActive | About"
            setRoute(newRoute)
          }
        }}
      />
      {!route ? tgve : <About />}
    </>
  );
}

export default App;
