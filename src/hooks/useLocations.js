import useSearchLocation from './useSearchLocation'
import useSelectedLocations from './useSelectedLocations'

 
const useLocations = () =>{
    const [locations,handleSearch,isLoadingMode] = useSearchLocation()
    const [selectedLocations,setSelectedLocations,viewPoint,zoom] = useSelectedLocations(locations)
    
    return [locations,handleSearch,selectedLocations,setSelectedLocations,viewPoint,zoom,isLoadingMode]

}


export default useLocations