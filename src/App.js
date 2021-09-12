import React, { useEffect, useState } from 'react';
import Eatlas from 'eatlas';

import './App.css';
import Header from './Header';

function App() {
  const gc = "la_code"
    , gURL = "https://raw.githubusercontent.com/saferactive/tgve/main/las-only-code.geojson"
    , dURL = "https://raw.githubusercontent.com/saferactive/tgve/main/ksi.csv";

  const eAtlasInstance = (options) => {
    const { dataURL, geoURL, geoColumn } = options;
    return (
      <Eatlas dark={true}
        geographyColumn={geoColumn}
        geographyURL={geoURL}
        defaultURL={dataURL} /> 
    )
  }
  const map = eAtlasInstance({
    dataURL: dURL,
    geoURL: gURL,
    geoColumn: gc
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
    </>
  );
}

export default App;
