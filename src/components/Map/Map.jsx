import React from "react";
import { MapContainer, TileLayer, Marker, Popup,MapConsumer } from 'react-leaflet'
import PropTypes from 'prop-types'
import ClipLoader from "react-spinners/ClipLoader"



const Map = ({selectedLocations,viewPoint,zoom}) => {

  const renderMakerPositionsList =()=>{
      
      let result = selectedLocations.map((recored)=>{
          if(recored.X_Coordinate !== null){
            return (
              <div key={recored._id}>
                <Marker position={[recored.X_Coordinate,recored.Y_Coordinate]}>
                  <Popup>
                      {recored.Bank_Name}
                   </Popup>
                </Marker>
              </div>
            )
           }  
      })
      
      result = result.filter( location => location !== undefined)
      return result
  }

  return (
    <>
      {selectedLocations.length ===0 ? <ClipLoader color={true} loading={"#ffffff"} size={200} css={`display: block;margin: 0 auto;`} /> :
      <MapContainer scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /><MapConsumer>
        {(map) => {
          map.setZoom(zoom)
          map.setView(viewPoint)
          return null
        }}
        </MapConsumer>
          {renderMakerPositionsList()}
      </MapContainer>}
    </>
         
  );
};

Map.propTypes ={
  selectedLocations: PropTypes.array,
  viewPoint: PropTypes.array,
  zoom: PropTypes.number
}

export default Map;
