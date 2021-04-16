import {useState,useEffect} from 'react'


const useSelectedLocations =(locations)=>{
    
    const [selectedLocations,setSelectedLocations] = useState([])
    const [viewPoint,setViewPoint] = useState([32.086500, 34.786400])
    const [zoom,setZoom] = useState(12)

    useEffect(()=>{
        if(selectedLocations.length !== 0){
          const selectLocation = selectedLocations[0]
          setViewPoint([selectLocation.X_Coordinate,selectLocation.Y_Coordinate])
          setZoom(18)
        }
        if(selectedLocations.length > 1){
          setZoom(12)
        }
    },[selectedLocations])

    
    useEffect(()=>{
        setSelectedLocations(locations)   
    },[locations])

    return [selectedLocations,setSelectedLocations,viewPoint,zoom]
    
}

export default useSelectedLocations