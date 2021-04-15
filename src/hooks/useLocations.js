import useSearchLocation from './useSearchLocation'
import useSelectedLocations from './useSelectedLocations'
import {useState} from 'react'
 
const useLocations = () =>{
    const [locations,handleSearch] = useSearchLocation()
    const [selectedLocations,setSelectedLocations,viewPoint,zoom] = useSelectedLocations(locations)
    
    return [locations,handleSearch,selectedLocations,setSelectedLocations,viewPoint,zoom]

}


export default useLocations