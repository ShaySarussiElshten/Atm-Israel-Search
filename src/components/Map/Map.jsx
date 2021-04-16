import React from "react";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import PropTypes from 'prop-types'
import ClipLoader from "react-spinners/ClipLoader"
import MyMapConsumer from './MyMapConsumer/myMapConsumer'


const Map = ({selectedLocations,viewPoint,zoom,isLoadingMode}) => {


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
      {isLoadingMode ? <ClipLoader color={true} loading={"#ffffff"} size={200} css={`display: block;margin: 0 auto;`} /> :
      <MapContainer scrollWheelZoom={true}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          <MyMapConsumer zoom={zoom} viewPoint={viewPoint} />
          {renderMakerPositionsList()}
      </MapContainer>}
    </>
         
  );
};

Map.propTypes ={
  selectedLocations: PropTypes.array,
  viewPoint: PropTypes.array,
  zoom: PropTypes.number,
  isLoadingMode: PropTypes.bool
}

export default Map;
