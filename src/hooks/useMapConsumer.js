import React from 'react';
import { MapConsumer } from 'react-leaflet'

const useMapConsumer = () =>{
    
    const setMapConsumer = (zoom,viewPoint)=>{
        return (
            <>
              <MapConsumer>
                {(map) => {
                    map.setZoom(zoom)
                    map.setView(viewPoint)
                    return null
                }}
              </MapConsumer>
            </>
          )

    }

    return [setMapConsumer]
}


export default useMapConsumer